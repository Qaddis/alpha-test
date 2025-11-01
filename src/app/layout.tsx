import type { Metadata } from "next"
import { Roboto, Roboto_Slab } from "next/font/google"

import AppHeader from "@/components/layout/AppHeader"

import "@/assets/css/globals.css"

const robotoFont = Roboto({
	variable: "--roboto-font",
	subsets: ["cyrillic", "latin"],
	style: ["normal", "italic"],
	weight: ["400", "600"]
})

const robotoSlabFont = Roboto_Slab({
	variable: "--roboto-slab-font",
	subsets: ["cyrillic", "latin"],
	style: ["normal"],
	weight: ["700"]
})

export const metadata: Metadata = {
	title: {
		template: "%s | Тестовое задание от Барсукова С.Д.",
		default: "Тестовое задание от Барсукова С.Д."
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body className={`${robotoFont.variable} ${robotoSlabFont.variable}`}>
				<AppHeader />

				<main className="main">
					<div className="wrapper">{children}</div>
				</main>
			</body>
		</html>
	)
}
