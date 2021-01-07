import React, {useState} from 'react'

function LoginForm() {
  const [inputs, setInputs] = useState({ email: '', password: '' })
  
  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setInputs(prevState => {
      return {...prevState, [name]: value}
    })

  }

  return (
    <div>
      this is the login form
      <form>
          <input type="text" placeholder='Email' name='email' value={inputs.name} onChange={handleChange}/>
          <input type="text" placeholder='Password' name='password' value={inputs.password} onChange={handleChange}/>

          <button>Login</button>
          <button>Or Register</button>

      </form>
    </div>
  )
}

export default LoginForm
