import Link from "@/app/components/Link";
import { Box, Heading, Text } from "@radix-ui/themes";

const page = () => {
	const definitions = [
		'"We", "us", "our": Refers to the owners and operators of the Site.',
		'"You", "your": Refers to the user or visitor of our Site.',
	];

	const userResponsibilities = [
		"To harass, abuse, or threaten others or otherwise violate any person's legal rights.",
		"To violate any intellectual property rights of us or any third party.",
		"To upload or otherwise disseminate any computer viruses or other software that may damage the property of another.",
		"To perpetrate any fraud.",
		"To engage in or create any unlawful gambling, sweepstakes, or pyramid scheme.",
		"To publish or distribute any obscene or defamatory material.",
		"To collect or store personal information about others.",
	];

	return (
		<Box>
			<Heading as='h1' mb='1'>
				Terms of Service
			</Heading>
			<Text size='1' as='p' mb='4'>
				Last updated: June 1 2024
			</Text>
			<Text as='p' mb='5'>
				Welcome to{" "}
				<Link href='https://nextjs-issue-tracker-red.vercel.app/'>
					https://nextjs-issue-tracker-red.vercel.app/
				</Link>{" "}
				(the "Site"). These terms and conditions outline the rules and
				regulations for the use of our Site. By accessing this Site, we assume
				you accept these terms and conditions in full. Do not continue to use
				the Site if you do not accept all the terms and conditions stated on
				this page.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				1. Definitions
			</Heading>
			<Box pl='4' mb='5'>
				<ul>
					{definitions.map((bullet, num) => (
						<li key={num} className='list-disc mb-3'>
							{bullet}
						</li>
					))}
				</ul>
			</Box>
			<Heading as='h2' size='4' mb='3'>
				2. Use of the Site
			</Heading>
			<Heading as='h3' size='3' mb='4'>
				Eligibility
			</Heading>
			<Text as='p' mb='5'>
				You must be at least 18 years old to use the Site. By using the Site,
				you represent and warrant that you have the right, authority, and
				capacity to enter into these Terms and to abide by all of the terms and
				conditions herein.
			</Text>
			<Heading as='h3' size='3' mb='4'>
				User Account
			</Heading>
			<Text as='p' mb='5'>
				To access certain features of the Site, you may be required to register
				for an account. You agree to provide accurate, current, and complete
				information during the registration process and to update such
				information to keep it accurate, current, and complete. You are
				responsible for safeguarding your password and agree not to disclose
				your password to any third party.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				3. User Responsibilities
			</Heading>
			<Text as='p' mb='5'>
				You agree not to use the Site for any unlawful purpose or any purpose
				prohibited under this clause. You agree not to use the Site in any way
				that could damage the Site, the services, or the general business of us.
				You further agree not to use the Site:
			</Text>
			<Box pl='4' mb='5'>
				<ul>
					{userResponsibilities.map((bullet, num) => (
						<li key={num} className='list-disc mb-3'>
							{bullet}
						</li>
					))}
				</ul>
			</Box>
			<Heading as='h2' size='4' mb='3'>
				4. Intellectual Property
			</Heading>
			<Text as='p' mb='5'>
				All content on the Site, including text, graphics, logos, images, and
				software, is the property of us or our content suppliers and is
				protected by international copyright laws. You agree not to copy,
				reproduce, distribute, or create derivative works from any content
				without our prior written consent.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				5. Termination
			</Heading>
			<Text as='p' mb='5'>
				We may terminate or suspend your access to the Site, without prior
				notice or liability, for any reason whatsoever, including, without
				limitation, if you breach the Terms. All provisions of the Terms which
				by their nature should survive termination shall survive termination,
				including, without limitation, ownership provisions, warranty
				disclaimers, indemnity, and limitations of liability.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				6. Limitation of Liability
			</Heading>
			<Text as='p' mb='5'>
				To the fullest extent permitted by law, in no event shall we, our
				directors, employees, or agents, be liable for any indirect, incidental,
				special, consequential, or punitive damages, including without
				limitation, loss of profits, data, use, goodwill, or other intangible
				losses, resulting from (i) your access to or use of or inability to
				access or use the Site; (ii) any conduct or content of any third party
				on the Site; (iii) any content obtained from the Site; and (iv)
				unauthorized access, use, or alteration of your transmissions or
				content, whether based on warranty, contract, tort (including
				negligence), or any other legal theory, whether or not we have been
				informed of the possibility of such damage.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				7. Disclaimer
			</Heading>
			<Text as='p' mb='5'>
				The Site is provided on an "AS IS" and "AS AVAILABLE" basis. We make no
				representations or warranties of any kind, express or implied, about the
				operation of the Site or the information, content, materials, or
				products included on the Site. You expressly agree that your use of the
				Site is at your sole risk.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				8. Governing Law
			</Heading>
			<Text as='p' mb='5'>
				These Terms shall be governed and construed in accordance with the laws
				of [Your Country/State], without regard to its conflict of law
				provisions. Our failure to enforce any right or provision of these Terms
				will not be considered a waiver of those rights. If any provision of
				these Terms is held to be invalid or unenforceable by a court, the
				remaining provisions of these Terms will remain in effect.
			</Text>
			<Heading as='h2' size='4' mb='3'>
				9. Changes to These Terms
			</Heading>
			<Text as='p' mb='5'>
				We reserve the right, at our sole discretion, to modify or replace these
				Terms at any time. If a revision is material, we will try to provide at
				least 30 days' notice prior to any new terms taking effect. What
				constitutes a material change will be determined at our sole discretion.
			</Text>
			<Text as='p' mb='5'>
				By using the Site, you agree to be bound by these Terms. If you do not
				agree to these Terms, please do not use the Site.
			</Text>
		</Box>
	);
};

export default page;
