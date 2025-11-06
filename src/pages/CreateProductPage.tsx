"use client"

import { useEffect } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"

import PageHeading from "@/components/ui/PageHeading"
import useProducts from "@/stores/productStore"
import type { INewProduct, IProduct } from "@/types/product.types"

import { useRouter } from "next/navigation"
import styles from "./CreateProductPage.module.css"

export default function CreateProductPage() {
	const requiredErrorMessage = "Это обязательное поле!"

	const { products, addProduct, init } = useProducts()

	const router = useRouter()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<INewProduct>()

	const submitHandler: SubmitHandler<INewProduct> = data => {
		const newProduct: IProduct = {
			id: products[products.length - 1].id + 1,
			title: data.title,
			description: data.description,
			images: [data.image],
			price: data.price,
			rating: 0.0,
			isFavorite: false
		}

		addProduct(newProduct)

		reset()

		router.push("/products")
	}

	useEffect(() => {
		if (products.length === 0) init()
	}, [])

	return (
		<section className={styles.page}>
			<PageHeading>Добавление продукта</PageHeading>

			<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
				<label htmlFor="title-inp">Название:</label>
				<input
					{...register("title", {
						required: true
					})}
					type="text"
					id="title-inp"
				/>
				{errors.title && (
					<span className={styles.error}>{requiredErrorMessage}</span>
				)}

				<label htmlFor="description-inp">Описание:</label>
				<textarea
					{...register("description", {
						required: true
					})}
					id="description-inp"
				></textarea>
				{errors.description && (
					<span className={styles.error}>{requiredErrorMessage}</span>
				)}

				<label htmlFor="price-inp">Цена:</label>
				<input
					{...register("price", {
						required: {
							value: true,
							message: requiredErrorMessage
						},
						valueAsNumber: true,
						validate: value =>
							(!isNaN(value) && value >= 0) || "Введите корректное число"
					})}
					type="text"
					id="price-inp"
				/>
				{errors.price && (
					<span className={styles.error}>{errors.price.message}</span>
				)}

				<label htmlFor="img-inp">Ссылка на изображение:</label>
				<input
					{...register("image", {
						required: true
					})}
					type="text"
					id="img-inp"
				/>
				{errors.image && (
					<span className={styles.error}>{requiredErrorMessage}</span>
				)}

				<button className={styles["submit-btn"]} type="submit">
					Добавить продукт
				</button>
			</form>
		</section>
	)
}
