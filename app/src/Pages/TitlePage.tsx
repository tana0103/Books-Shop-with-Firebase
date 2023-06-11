import { useEffect, useState } from "react"
import { GetBooksList, IBook } from "../Services/GetBooksList"
import { ShowBooksList } from "./ShowBooksList"
import "./Style/TitlePage.css"
import { Link } from "react-router-dom"

export const TitlePage = () => {
	const [getState, setState] = useState<IBook[]>([])
	useEffect(() => {
		GetBooksList()
			.then((books: IBook[]) => {
				setState(books)
			})
	}, [])

	return (
			<div className="content">
				{getState.map(book =>
					(<ShowBooksList element={book} key={book.title} />)
				)}
			</div> 
	)
}