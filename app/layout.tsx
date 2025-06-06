import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pockota = localFont({
	src: [
		{
			path: "./fonts/pockota/Pockota-Regular.woff",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-pockota",
});

const inter = localFont({
	src: [
		{
			path: "./fonts/Inter/Inter-Regular.woff2",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Portfolio Shaqran",
	description: "My portfolio.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${pockota.variable} ${inter.variable} antialiased lg:bg-bg-gradient-color`}>{children}</body>
		</html>
	);
}
