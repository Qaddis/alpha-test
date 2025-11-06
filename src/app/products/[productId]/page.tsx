import type { Metadata } from "next"

import ProductPage from "@/pages/ProductPage"

export const metadata: Metadata = {
	title: "Страница продукта"
}

export default async function Product({
	params
}: {
	params: Promise<{ productId: string }>
}) {
	const { productId } = await params

	return <ProductPage productId={productId} />
}
