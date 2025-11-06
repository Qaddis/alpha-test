"use client"

import { Delete, Favorite, FavoriteBorder, Star } from "@mui/icons-material"
import Image from "next/image"
import { useRouter } from "next/navigation"

import useProducts from "@/stores/productStore"
import OutlineButton from "../ui/OutlineButton"

import styles from "./ProductCard.module.css"

interface IProps {
	productId: number
}

export default function ProductCard({ productId }: IProps) {
	const { getProduct, toggleFavorite, deleteProduct } = useProducts()

	const router = useRouter()

	const product = getProduct(productId)

	const handleFavorite = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		event.stopPropagation()
		toggleFavorite(productId)
	}

	const handleDelete = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		event.stopPropagation()
		deleteProduct(productId)
	}

	return (
		product && (
			<article
				className={styles.card}
				onClick={() => router.push(`/products/${productId}`)}
			>
				<Image
					width={1000}
					height={1000}
					src={product.images[0]}
					alt={`${product.title} Product Card Banner`}
					className={styles.img}
				/>

				<div className={styles.info}>
					<div className={styles.header}>
						<h5 className={styles.title} title={product.title}>
							{product.title}
						</h5>

						<div className={styles.rating}>
							<span>{product.rating}</span> <Star />
						</div>
					</div>

					<p className={styles.description}>{product.description}</p>

					<p className={styles.price}>
						<span>Цена:</span> {product.price}$
					</p>
				</div>

				<div className={styles.buttons}>
					<OutlineButton onClick={handleFavorite}>
						{product.isFavorite ? <Favorite /> : <FavoriteBorder />}
					</OutlineButton>
					<OutlineButton onClick={handleDelete}>
						<Delete />
					</OutlineButton>
				</div>
			</article>
		)
	)
}
