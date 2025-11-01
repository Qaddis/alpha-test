"use client"

import Link from "next/link"

import HeaderLink from "../ui/HeaderLink"

import styles from "./AppHeader.module.css"

export default function AppHeader() {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<h1 className={styles.logo}>
					<Link href="/">Test Market</Link>
				</h1>

				<nav className={styles.nav}>
					<HeaderLink to="/">Главная</HeaderLink>
					<HeaderLink to="/products">Продукты</HeaderLink>
				</nav>
			</div>
		</header>
	)
}
