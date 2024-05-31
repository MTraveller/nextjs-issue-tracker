import { Skeleton } from "@/app/components";
import { Flex } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
	return (
		<Flex className='max-w-xl' gap='2' direction='column'>
			<Skeleton height='1.9rem' />
			<Skeleton height='23.1rem' />
		</Flex>
	);
};

export default IssueFormSkeleton;
