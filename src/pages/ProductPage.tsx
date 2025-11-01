"use client"

import PageHeading from "@/components/ui/PageHeading"

import styles from "./ProductPage.module.css"

interface IProps {
	productId: string
}

export default function ProductPage({ productId }: IProps) {
	return (
		<section className={styles.page}>
			<PageHeading>Продукт (ID: {productId})</PageHeading>
		</section>
	)
}
