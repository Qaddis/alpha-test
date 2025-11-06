"use client"

import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"

import useProducts from "@/stores/productStore"
import type { IProduct } from "@/types/product.types"

import styles from "./SearchWithFilters.module.css"

interface IProps {
	setProducts: Dispatch<SetStateAction<IProduct[]>>
}

export default function SearchWithFilters({ setProducts }: IProps) {
	const { products, init } = useProducts()

	const [searchQuery, setSearchQuery] = useState<string>("")
	const [isFavorite, setIsFavorite] = useState<boolean>(false)

	useEffect(() => {
		const filteredProducts = products
			.filter(product => (isFavorite ? product.isFavorite : true))
			.filter(product =>
				product.title.toLowerCase().includes(searchQuery.toLowerCase())
			)

		setProducts(filteredProducts)
	}, [searchQuery, isFavorite, products])

	/*
		Зависимости оставлены пустыми специально: это нужно для того,
		чтобы получение тестовых данных с API происходило не каждый раз,
		когда массив продуктов пуст, а только один раз, при первом рендере
	*/
	useEffect(() => {
		if (products.length === 0) init()
		else setProducts(products)
	}, [products.length])

	return (
		<aside className={styles["search-block"]}>
			<div className={styles.search}>
				<input
					className={styles.search__input}
					placeholder="Поиск по продуктам"
					type="text"
					value={searchQuery}
					onChange={evt => setSearchQuery(evt.target.value)}
				/>
			</div>

			<div className={styles.filters}>
				<div className={styles["cb-with-label"]}>
					<input
						id="is_favorite-cb"
						type="checkbox"
						checked={isFavorite}
						onChange={evt => setIsFavorite(evt.target.checked)}
					/>

					<label htmlFor="is_favorite-cb">Избранное</label>
				</div>
			</div>
		</aside>
	)
}
