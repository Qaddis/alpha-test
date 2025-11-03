import type { IProduct } from "@/types/product.types"

/**
 * Возвращает список продуктов, полученных со стороннего API (DummyJSON)
 * @returns {IProduct[]} Возвращает массив продуктов
 */
export const getData = async (): Promise<IProduct[]> => {
	const response = await fetch("https://dummyjson.com/products")
	const data = await response.json()

	return data.products.map((item: IProduct) => ({
		id: item.id,
		title: item.title,
		description: item.description,
		price: item.price,
		rating: item.rating,
		images: item.images,
		isFavorite: false
	}))
}
