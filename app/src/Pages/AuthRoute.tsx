import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


export interface IAuthRouteProps {
	children: JSX.Element
}
export const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
	const { children} = props
	const auth = getAuth()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		AuthCheck()
		return ()=> AuthCheck()
	}, [auth, navigate])
	const AuthCheck = onAuthStateChanged(auth, (user) => {
		if (user) {
			setLoading(false)
		} else {
			console.log('unauthorized');
			navigate('/login')
		}
	})

	if(loading) return <p>loading...</p>
	return <>{ children}</>
}