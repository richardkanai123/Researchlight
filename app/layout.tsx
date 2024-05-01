import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SearchLight Research",
	description: "Your trusted reliable partner in research and writing",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='scroll-smooth bg-scroll '>
			<body>
				<div className='w-full relative'>
					<Header />
					<main className='container p-0	 mx-auto w-full  flex min-h-screen flex-col items-center justify-between'>
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}
