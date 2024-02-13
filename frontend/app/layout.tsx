import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/_styles/globals.scss";
import ToastProvider from "@/app/_providers/toast-provider";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pokedex by Tomas Chlebek",
	description: "App for browsing pokemons",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<ToastProvider>{children}</ToastProvider>
			</body>
		</html>
	);
}
