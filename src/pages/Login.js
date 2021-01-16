import React, {useState} from 'react'
import { Nav, LoginForm, SignUpForm } from '../components/'

function Login() {
  const [showLogin, setShowLogin] = useState(false)


  return (
    <div>
      <Nav />
      {showLogin ? <LoginForm /> : <SignUpForm />}
    </div>
  )
}

export default Login
