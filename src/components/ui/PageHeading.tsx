import type { PropsWithChildren } from "react"

import styles from "./PageHeading.module.css"

export default function PageHeading({ children }: PropsWithChildren) {
	return <h2 className={styles.heading}>{children}</h2>
}
