import React, {useState} from 'react'

function SignUpForm() {
  return (
    <div>
      <form action="">
        <input name="name" type="text"/>
        <input name="email" type="email"/>
        <textarea name="bio" />
        <button type="button">Sign Up</button>
        <p>Login</p>
      </form>
    </div>
  )
}

export default SignUpForm
