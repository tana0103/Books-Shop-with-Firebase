export type ResTypeBooks = {
	"books": IBook[];
}

export interface IBook {
	"title": string,
	"subtitle": string,
	"isbn13": string | number,
	"price": string | number,
	"image": string,
	"url": string
}

const url = 'https://api.itbook.store/1.0/search/mongodb'

export const GetBooksList = (): Promise<IBook[]> => {
	return fetch(url)
		.then(response => response.json())
		.then((response: ResTypeBooks) => (response.books))
}