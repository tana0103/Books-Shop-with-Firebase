import { Outlet, NavLink } from "react-router-dom";
import { Application } from "./Application";
import "./Style/Layout.css"
import { Title } from "./Title";
import { Basket } from "./Basket";

export const Layout = () => {
	return (
		<div>
			<header>
				<nav >
					<NavLink to='/title' className="font"> <Title /></NavLink>
					{/* <NavLink to='/singlePage' ><SinglePage /></NavLink> */}
					<NavLink to='/savesBooks' className="font"><Basket/></NavLink>
					<NavLink to='/login' className="font"><Application/></NavLink>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</div>

	)
}