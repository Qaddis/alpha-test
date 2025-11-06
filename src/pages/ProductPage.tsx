"use client"

import {
	ArrowBack,
	Delete,
	Favorite,
	FavoriteBorder,
	Star
} from "@mui/icons-material"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import OutlineButton from "@/components/ui/OutlineButton"
import PageHeading from "@/components/ui/PageHeading"
import useProducts from "@/stores/productStore"

import styles from "./ProductPage.module.css"

interface IProps {
	productId: string
}

export default function ProductPage({ productId }: IProps) {
	const { products, init, getProduct, toggleFavorite, deleteProduct } =
		useProducts()

	const router = useRouter()

	const product = getProduct(Number(productId))

	const handleDelete = (): void => {
		if (product) deleteProduct(product.id)

		router.push("/products")
	}

	useEffect(() => {
		if (products.length === 0) init()
	}, [products, init])

	return product ? (
		<section>
			<OutlineButton
				onClick={() => router.push("/products")}
				className={styles["back-btn"]}
			>
				<ArrowBack /> <span>Назад</span>
			</OutlineButton>

			<div className={styles.content}>
				<div className={styles.banner}>
					<Image
						width={1000}
						height={1000}
						src={product.images[0]}
						alt={`${product.title} Product Banner`}
					/>
				</div>

				<div className={styles.info}>
					<PageHeading>{product.title}</PageHeading>

					<p className={styles.rating}>
						Рейтинг: <span>{product.rating}</span> <Star />
					</p>

					<p className={styles.description}>{product.description}</p>

					<h4 className={styles.price}>
						<span>Цена:</span> {product.price}$
					</h4>

					<div className={styles.buttons}>
						<OutlineButton onClick={() => toggleFavorite(product.id)}>
							{product.isFavorite ? <Favorite /> : <FavoriteBorder />}
						</OutlineButton>
						<OutlineButton onClick={handleDelete}>
							<Delete />
						</OutlineButton>
					</div>
				</div>
			</div>
		</section>
	) : (
		<h3>Продукт не найден!</h3>
	)
}
