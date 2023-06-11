import { initializeApp } from "firebase/app"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { config } from "../Config/config" 
import { AuthRoute } from "./AuthRoute" 
import { Layout } from "./Layout"
import { TitlePage } from "./TitlePage"
import { SavesBooks } from "./SavesBooks"
import { SinglePage } from "./SinglePage"
import { NotFound } from "./NotFound"

initializeApp(config.firebaseConfig)
export interface IApplicationProps {} 

export const Application: React.FunctionComponent<IApplicationProps> = (props) => {
	
	return (
		<div>Login</div>
	)
}