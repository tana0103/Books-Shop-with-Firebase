import React, { useEffect } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
import './Style/Login.css'

export interface IHomePageProps {}
export const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
	const navigate = useNavigate()
	const auth = getAuth()
	
	const signOutClick = () => {
		signOut(auth)
		navigate('/login')
	}
	
  return (
	  <div>
		  {/* <p>HomePage (Protected by Firebase)</p> */}
		  <button onClick={signOutClick} className="login">Sign out of Firebase</button>
		  </div>
  )
}
