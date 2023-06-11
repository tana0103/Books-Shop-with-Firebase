import { IBook } from "../../Services/GetBooksList"


export const ADD_MY_SAVES_BOOK = 'ADD_MY_SAVES_BOOK'

export type ArrActionType = {
	type: string
	payload: IBook
}

export const addMySavesBook = (book: IBook): ArrActionType => ({
	type: ADD_MY_SAVES_BOOK,
	payload: book
})