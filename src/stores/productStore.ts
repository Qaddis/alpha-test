import { create } from "zustand"

import { getData } from "@/api"
import type { IProduct } from "@/types/product.types"

interface IProductStore {
	products: IProduct[]
	setProducts: (newProducts: IProduct[]) => void
	getProduct: (productId: number) => IProduct | undefined
	toggleFavorite: (productId: number) => void
	addProduct: (newProduct: IProduct) => void
	deleteProduct: (productId: number) => void
	init: () => Promise<void>
}

const useProducts = create<IProductStore>((set, get) => ({
	products: [],
	setProducts: newProducts => set({ products: newProducts }),
	getProduct: productId => {
		const { products } = get()

		return products.find(product => product.id === productId)
	},
	toggleFavorite: productId =>
		set(state => ({
			products: state.products.map(product =>
				product.id === productId
					? { ...product, isFavorite: !product.isFavorite }
					: product
			)
		})),
	addProduct: newProduct =>
		set(state => ({
			products: [...state.products, newProduct]
		})),
	deleteProduct: productId =>
		set(state => ({
			products: state.products.filter(product => product.id !== productId)
		})),
	init: async () => set({ products: await getData() })
}))

export default useProducts
