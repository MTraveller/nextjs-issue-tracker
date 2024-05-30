import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RxPencil2 } from "react-icons/rx";
import ReactMarkDown from "react-markdown";

interface Props {
	params: { id: string };
}

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
	if (!parseInt(params.id)) notFound();

	const issue = await prisma.issue.findUnique({
		where: { id: parseInt(params.id) },
	});

	if (!issue) notFound();

	return (
		<Grid columns={{ initial: "1", md: "2" }} gap='5'>
			<Box>
				<Heading>{issue.title}</Heading>
				<Flex align='center' gap='3' my='2'>
					<IssueStatusBadge status={issue.status} />
					<Text>{issue.createdAt.toDateString()}</Text>
				</Flex>
				<Card className='prose' mt='4' size='4'>
					<ReactMarkDown>{issue.description}</ReactMarkDown>
				</Card>
			</Box>
			<Box>
				<Button>
					<RxPencil2 />
					<Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
				</Button>
			</Box>
		</Grid>
	);
};

export default IssueDetailPage;
