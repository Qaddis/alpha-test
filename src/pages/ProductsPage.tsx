"use client"

import { useState } from "react"

import ProductCard from "@/components/features/ProductCard"
import SearchWithFilters from "@/components/features/SearchWithFilters"
import ProductsContainer from "@/components/layout/ProductsContainer"
import PageHeading from "@/components/ui/PageHeading"
import type { IProduct } from "@/types/product.types"

import styles from "./ProductsPage.module.css"

export default function ProductsPage() {
	const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

	return (
		<section className={styles.page}>
			<PageHeading>Продукты</PageHeading>

			<SearchWithFilters setProducts={setFilteredProducts} />

			<ProductsContainer>
				{filteredProducts.length === 0 ? (
					<span>Пусто ;(</span>
				) : (
					filteredProducts.map(product => (
						<ProductCard key={`product-${product.id}`} {...product} />
					))
				)}
			</ProductsContainer>
		</section>
	)
}
