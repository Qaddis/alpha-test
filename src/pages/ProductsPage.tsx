"use client"

import AddIcon from "@mui/icons-material/Add"
import { useRouter } from "next/navigation"
import { useState } from "react"

import ProductCard from "@/components/features/ProductCard"
import SearchWithFilters from "@/components/features/SearchWithFilters"
import ProductsContainer from "@/components/layout/ProductsContainer"
import PageHeading from "@/components/ui/PageHeading"
import type { IProduct } from "@/types/product.types"

import styles from "./ProductsPage.module.css"

export default function ProductsPage() {
	const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

	const router = useRouter()

	return (
		<section className={styles.page}>
			<PageHeading>Продукты</PageHeading>

			<SearchWithFilters setProducts={setFilteredProducts} />

			<ProductsContainer>
				{filteredProducts.length === 0 ? (
					<span>Пусто ;(</span>
				) : (
					filteredProducts.map(product => (
						<ProductCard key={`product-${product.id}`} productId={product.id} />
					))
				)}
			</ProductsContainer>

			<button
				onClick={() => router.push("/create-product")}
				className={styles["add-btn"]}
				title="Добавить новый продукт"
			>
				<AddIcon />
			</button>
		</section>
	)
}
