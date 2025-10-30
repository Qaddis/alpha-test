import type { Metadata } from "next"
import { Roboto, Roboto_Slab } from "next/font/google"

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
				{children}
			</body>
		</html>
	)
}
