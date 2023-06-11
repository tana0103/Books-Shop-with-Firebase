import React, {useState} from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Style/Login.css'

export interface ILoginPageProps {}
export const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
	const auth = getAuth()
	const navigate = useNavigate()
	const [authing, setAuthing] = useState(false)
	const signInWithGoogle = async () => {
		setAuthing(true)
		signInWithPopup(auth, new GoogleAuthProvider())
			.then(response => {
				console.log(response.user.uid)
				console.log(response.user.displayName);
				console.log(response.user.email);
				navigate('/auth')
			})
			.catch(error => {
			console.log(error);
			setAuthing(false)
		})
	}
  return (
	  <div>
		  {/* <p> LoginPage</p> */}
		  <button onClick={()=>signInWithGoogle()} disabled={authing} className="login">Sign in with Google</button>
	  </div>
  )
}
