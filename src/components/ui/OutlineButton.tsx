import type { ButtonHTMLAttributes, PropsWithChildren } from "react"

import styles from "./OutlineButton.module.css"

interface IProps
	extends PropsWithChildren,
		ButtonHTMLAttributes<HTMLButtonElement> {}

export default function OutlineButton({
	children,
	className,
	...props
}: IProps) {
	const getClassNames = (): string =>
		className ? `${styles.button} ${className}` : styles.button

	return (
		<button className={getClassNames()} {...props}>
			{children}
		</button>
	)
}
