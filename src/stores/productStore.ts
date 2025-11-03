import { create } from "zustand"

import { getData } from "@/api"
import type { IProduct } from "@/types/product.types"

interface IProductStore {
	products: IProduct[]
	setProducts: (newProducts: IProduct[]) => void
	getProduct: (productId: number) => IProduct | undefined
	addProduct: (newProduct: IProduct) => void
	deleteProduct: (productId: number) => void
	init: () => Promise<void>
}

const useProducts = create<IProductStore>((set, get) => ({
	products: [],
	setProducts: newProducts => set({ products: newProducts }),
	getProduct: productId => {
		const state = get()

		return state.products.find(product => product.id === productId)
	},
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
