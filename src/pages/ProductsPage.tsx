"use client"

import { useEffect } from "react"

import PageHeading from "@/components/ui/PageHeading"
import useProducts from "@/stores/productStore"

import ProductCard from "@/components/features/ProductCard"
import styles from "./ProductsPage.module.css"

export default function ProductsPage() {
	const { products, init } = useProducts()

	useEffect(() => {
		if (products.length === 0) init()
	}, [products, init])

	return (
		<section className={styles.page}>
			<PageHeading>Продукты</PageHeading>

			<div className={styles["cards-container"]}>
				{products.length === 0 ? (
					<span>Пусто ;(</span>
				) : (
					products.map(product => (
						<ProductCard key={`product-${product.id}`} {...product} />
					))
				)}
			</div>
		</section>
	)
}
