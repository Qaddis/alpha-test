"use client"

import { PropsWithChildren } from "react"

export default function ProductsContainer({ children }: PropsWithChildren) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				flexWrap: "wrap",
				gap: "32px"
			}}
		>
			{children}
		</div>
	)
}
