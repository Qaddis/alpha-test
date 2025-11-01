"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { PropsWithChildren } from "react"

import styles from "./HeaderLink.module.css"

interface IProps extends PropsWithChildren {
	to: `/${string}`
}

export default function HeaderLink({ children, to }: IProps) {
	const pathname = usePathname()

	return (
		<Link
			href={to}
			className={
				to === pathname ? `${styles.link} ${styles.active}` : styles.link
			}
		>
			{children}
		</Link>
	)
}
