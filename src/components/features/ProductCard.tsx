"use client"

import { Delete, Favorite, FavoriteBorder, Star } from "@mui/icons-material"
import Image from "next/image"

import useProducts from "@/stores/productStore"
import type { IProduct } from "@/types/product.types"

import styles from "./ProductCard.module.css"

export default function ProductCard(props: IProduct) {
	const { toggleFavorite, deleteProduct } = useProducts()

	return (
		<article className={styles.card}>
			<Image
				width={1000}
				height={1000}
				src={props.images[0]}
				alt={`${props.title} Product Card Banner`}
				className={styles.img}
			/>

			<div className={styles.info}>
				<div className={styles.header}>
					<h5 className={styles.title} title={props.title}>
						{props.title}
					</h5>

					<div className={styles.rating}>
						<span>{props.rating}</span> <Star />
					</div>
				</div>

				<p className={styles.description}>{props.description}</p>

				<p className={styles.price}>
					<span>Price:</span> {props.price}$
				</p>
			</div>

			<div className={styles.buttons}>
				<button onClick={() => toggleFavorite(props.id)}>
					{props.isFavorite ? <Favorite /> : <FavoriteBorder />}
				</button>
				<button onClick={() => deleteProduct(props.id)}>
					<Delete />
				</button>
			</div>
		</article>
	)
}
