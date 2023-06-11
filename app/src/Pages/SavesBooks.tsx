import { useSelector } from "react-redux"
import { AppGlobalState } from "../GlobalStore/globalStore"
import { ShowBooksList } from "./ShowBooksList"
import "./Style/SaveBook.css"

export const SavesBooks = () => {
	const savesBooks = useSelector((state: AppGlobalState) => state.mySavesBooks)
	const savesBooksArr = savesBooks.books ? savesBooks.books.slice(0, 10) : []
	return (
		<div className="cards">
			{savesBooksArr.map(book => <ShowBooksList element={book} key={book.price} />)}
		</div>
	)
}