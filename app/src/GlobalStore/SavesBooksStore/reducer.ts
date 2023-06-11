import { IBook } from "../../Services/GetBooksList"
import { ADD_MY_SAVES_BOOK, ArrActionType } from "./action"


type ArrBooksType = {
	books: IBook[]
}

const defaultState: ArrBooksType = {
	books: []
}

export const mySavesBooksReducer = (state: ArrBooksType = defaultState, action: ArrActionType): ArrBooksType => {
	switch (action.type) {
		case ADD_MY_SAVES_BOOK:
			return {
				...state,
				books: [...state.books, action.payload]
			}
		default:
			return state
	}
}