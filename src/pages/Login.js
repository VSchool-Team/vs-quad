import React, {useState} from 'react'
import { Nav, LoginForm, SignUpForm } from '../components'

function Login() {
  const [showLogin, setShowLogin] = useState(true)


  return (
    <div>
      <Nav />
      {showLogin ? <LoginForm /> : <SignUpForm />}
    </div>
  )
}

export default Login
