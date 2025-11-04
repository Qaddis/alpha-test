"use client"

import Link from "next/link"

import ProductCard from "@/components/features/ProductCard"
import ProductsContainer from "@/components/layout/ProductsContainer"
import PageHeading from "@/components/ui/PageHeading"
import useProducts from "@/stores/productStore"

import styles from "./HomePage.module.css"

export default function HomePage() {
	const favoriteProducts = useProducts(state => state.products).filter(
		product => product.isFavorite
	)

	return (
		<section>
			<PageHeading>Главная</PageHeading>

			<div>
				<h3 className={styles.favorites__heading}>Избранное</h3>

				{favoriteProducts.length === 0 ? (
					<div className={styles["no-favorites"]}>
						<h4>Пока что тут пусто...</h4>

						<Link href="/products">К продуктам</Link>
					</div>
				) : (
					<ProductsContainer>
						{favoriteProducts.map(product => (
							<ProductCard key={`product-${product.id}`} {...product} />
						))}
					</ProductsContainer>
				)}
			</div>
		</section>
	)
}
