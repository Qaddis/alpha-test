import type { Metadata } from "next"

import ProductsPage from "@/pages/ProductsPage"

export const metadata: Metadata = {
	title: "Продукты"
}

export default function Products() {
	return <ProductsPage />
}
