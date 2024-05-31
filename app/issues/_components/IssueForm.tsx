"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { issueSchema } from "@/app/validationIssueSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import {
	Box,
	Button,
	Callout,
	DropdownMenu,
	Flex,
	Select,
	TextField,
} from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
	ssr: false,
});

type IssueFormData = z.infer<typeof issueSchema>;

const IssueForm = ({
	issue,
	buttonState,
}: {
	issue?: Issue;
	buttonState: string;
}) => {
	const router = useRouter();
	const currentPath = usePathname();
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IssueFormData>({
		resolver: zodResolver(issueSchema),
	});
	const [error, setError] = useState("");
	const [isSubmitting, setSubmitting] = useState(false);

	const onSubmit = handleSubmit(async (data) => {
		try {
			setSubmitting(true);
			await axios.post("/api/issues", data);
			router.push("/issues");
		} catch (error) {
			setSubmitting(false);
			setError("An unexpected error occured.");
		}
	});

	return (
		<div className='max-w-xl'>
			{error && (
				<Callout.Root color='red' className='mb-3'>
					<Callout.Text>{error}</Callout.Text>
				</Callout.Root>
			)}
			<form onSubmit={onSubmit} className='space-y-3'>
				<TextField.Root
					defaultValue={issue?.title}
					placeholder='Title'
					{...register("title")}
				>
					<TextField.Slot />
				</TextField.Root>
				<ErrorMessage>{errors.title?.message}</ErrorMessage>
				<Controller
					name='description'
					control={control}
					defaultValue={issue?.description}
					render={({ field }) => (
						<SimpleMDE placeholder='Description' {...field} />
					)}
				/>
				<ErrorMessage>{errors.description?.message}</ErrorMessage>
				<Flex gap='4' align='center'>
					{currentPath !== "/issues/new" && (
						<Controller
							name='status'
							control={control}
							defaultValue={issue?.status}
							render={({ field }) => (
								<Select.Root size='2' {...field} onValueChange={field.onChange}>
									<Select.Trigger />
									<Select.Content>
										<Select.Item value='OPEN'>Open</Select.Item>
										<Select.Item value='IN_PROGRESS'>In Progress</Select.Item>
										<Select.Item value='CLOSED'>Closed</Select.Item>
									</Select.Content>
								</Select.Root>
							)}
						/>
					)}
					<Button disabled={isSubmitting}>
						{buttonState} Issue {isSubmitting && <Spinner />}
					</Button>
				</Flex>
			</form>
		</div>
	);
};

export default IssueForm;
