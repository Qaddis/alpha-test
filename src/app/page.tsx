import type { Metadata } from "next"

import HomePage from "@/pages/HomePage"

export const metadata: Metadata = {
	title: "Главная | Тестовое задание от Барсукова С.Д."
}

export default function Home() {
	return <HomePage />
}
