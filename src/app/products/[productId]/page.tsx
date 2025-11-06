import type { Metadata } from "next"

import { getData } from "@/api"
import ProductPage from "@/pages/ProductPage"

export const metadata: Metadata = {
	title: "Страница продукта"
}

export async function generateStaticParams() {
	const products = await getData()

	return products.map(product => ({
		productId: String(product.id)
	}))
}

export default async function Product({
	params
}: {
	params: Promise<{ productId: string }>
}) {
	const { productId } = await params

	return <ProductPage productId={productId} />
}
