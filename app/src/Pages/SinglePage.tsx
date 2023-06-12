import { useLocation } from "react-router"
import "./Style/SinglePage.css"

export const SinglePage = () => {
	const params = useLocation()
	
	return (
		<div className="box">
			<div className="img">
				<div className="title">{params.state.title}</div>
				<img src={params.state.img} />
			</div>
			<div className="description">
				<h3>Subtitle: {params.state.subtitle}</h3>
				<h3>Price: {params.state.price}</h3>
			</div>
		</div>
	)
}