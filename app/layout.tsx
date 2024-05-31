import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./auth/Provider";
import "./globals.css";
import NavBar from "./NavBar";
import "./theme-config.css";
import QueryClientProvider from "@/QueryClientProvider";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<QueryClientProvider>
				<body className={inter.variable}>
					<AuthProvider>
						<Theme accentColor='purple'>
							<NavBar />
							<main className='p-5'>
								<Container>{children}</Container>
							</main>
						</Theme>
					</AuthProvider>
				</body>
			</QueryClientProvider>
		</html>
	);
}
