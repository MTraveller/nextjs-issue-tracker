import Link from "@/app/components/Link";
import { Box, Heading, Text } from "@radix-ui/themes";

const page = () => {
	const useOfInformation = [
		"To provide, operate, and maintain the Site",
		"To improve, personalize, and expand the Site",
		"To understand and analyze how you use the Site",
		"To develop new products, services, features, and functionality",
		"To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Site, and for marketing and promotional purposes",
		"To process your transactions and manage your orders",
		"To find and prevent fraud",
	];

	const dataProtectionRights = [
		"The right to access – You have the right to request copies of your personal data.",
		"The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.",
		"The right to erasure – You have the right to request that we erase your personal data, under certain conditions.",
		"The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.",
		"The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.",
		"The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
	];

	return (
		<Box>
			<Heading as='h1' mb='1'>
				Privacy Policy
			</Heading>
			<Text size='1' as='p' mb='4'>
				Last updated: June 1 2024
			</Text>
			<Text as='p' mb='5'>
				Welcome to{" "}
				<Link href='https://nextjs-issue-tracker-red.vercel.app/'>
					https://nextjs-issue-tracker-red.vercel.app/
				</Link>{" "}
				(the "Site"). Your privacy is important to us. This Privacy Policy
				explains how we collect, use, disclose, and safeguard your information
				when you visit our Site. Please read this Privacy Policy carefully. If
				you do not agree with the terms of this Privacy Policy, please do not
				access the Site.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				1. Information We Collect
			</Heading>
			<Text as='p' mb='5'>
				We may collect information about you in a variety of ways. The
				information we may collect on the Site includes:
			</Text>
			<Heading as='h3' size='3' mb='4'>
				Personal Data
			</Heading>
			<Text as='p' mb='5'>
				Personally identifiable information, such as your name, email address,
				and other details you provide voluntarily when you register for an
				account, submit an issue, or contact us.
			</Text>
			<Heading as='h3' size='3' mb='4'>
				Usage Data
			</Heading>
			<Text as='p' mb='5'>
				Information about your interaction with the Site, including the pages
				you visit, the time and date of your visits, and the time spent on those
				pages.
			</Text>
			<Heading as='h3' size='3' mb='4'>
				Device Data
			</Heading>
			<Text as='p' mb='5'>
				Information about your device, such as your IP address, browser type,
				and operating system.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				2. Use of Your Information
			</Heading>
			<Text as='p' mb='5'>
				We use the information we collect in the following ways:
			</Text>
			<Box pl='4'>
				<ul>
					{useOfInformation.map((bullet, num) => (
						<li key={num} className='list-disc mb-3'>
							{bullet}
						</li>
					))}
				</ul>
			</Box>
			<Heading as='h2' size='4' mt='5' mb='3'>
				3. Disclosure of Your Information
			</Heading>
			<Text as='p' mb='5'>
				We may share information we have collected about you in certain
				situations. Your information may be disclosed as follows:
			</Text>
			<Heading as='h3' size='3' mb='4'>
				By Law or to Protect Rights
			</Heading>
			<Text as='p' mb='5'>
				If we believe the release of information about you is necessary to
				respond to legal process, to investigate or remedy potential violations
				of our policies, or to protect the rights, property, and safety of
				others, we may share your information as permitted or required by any
				applicable law, rule, or regulation.
			</Text>
			<Heading as='h3' size='3' mb='4'>
				Third-Party Service Providers
			</Heading>
			<Text as='p' mb='5'>
				We may share your information with third parties that perform services
				for us or on our behalf, including payment processing, data analysis,
				email delivery, hosting services, customer service, and marketing
				assistance.
			</Text>
			<Heading as='h3' size='3' mb='4'>
				Business Transfers
			</Heading>
			<Text as='p' mb='5'>
				We may share or transfer your information in connection with, or during
				negotiations of, any merger, sale of company assets, financing, or
				acquisition of all or a portion of our business to another company.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				4. Security of Your Information
			</Heading>
			<Text as='p' mb='5'>
				We use administrative, technical, and physical security measures to help
				protect your personal information. While we have taken reasonable steps
				to secure the personal information you provide to us, please be aware
				that despite our efforts, no security measures are perfect or
				impenetrable, and no method of data transmission can be guaranteed
				against any interception or other type of misuse.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				5. Your Data Protection Rights
			</Heading>
			<Text as='p' mb='5'>
				Depending on your location, you may have the following rights regarding
				your personal data:
			</Text>
			<Box pl='4'>
				<ul>
					{dataProtectionRights.map((bullet, num) => (
						<li key={num} className='list-disc mb-3'>
							{bullet}
						</li>
					))}
				</ul>
			</Box>
			<Text as='p' mt='5' mb='5'>
				If you make a request, we have one month to respond to you. If you would
				like to exercise any of these rights, please contact us at our provided
				contact information.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				6. Changes to This Privacy Policy
			</Heading>
			<Text as='p' mb='5'>
				We may update this Privacy Policy from time to time. We will notify you
				of any changes by posting the new Privacy Policy on this page. You are
				advised to review this Privacy Policy periodically for any changes.
				Changes to this Privacy Policy are effective when they are posted on
				this page.
			</Text>
			<Text as='p' mb='5'>
				By using the Site, you agree to the terms of this Privacy Policy. If you
				do not agree to these terms, please do not use the Site.
			</Text>
		</Box>
	);
};

export default page;
