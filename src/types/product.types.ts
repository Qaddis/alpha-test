export interface IProduct {
	id: number
	title: string
	description: string
	price: number
	rating: number
	images: string[]
	isFavorite: boolean
}

export interface INewProduct {
	title: string
	description: string
	price: number
	image: string
}
