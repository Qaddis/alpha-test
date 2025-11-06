import type { Metadata } from "next"

import CreateProductPage from "@/pages/CreateProductPage"

export const metadata: Metadata = {
	title: "Добавление продукта"
}

export default function CreateProduct() {
	return <CreateProductPage />
}
