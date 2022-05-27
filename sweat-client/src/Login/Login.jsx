import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Login = () => {
  return (
    <LoginContainer>
      <h1>Log in to your Account</h1>
      <div className='form-fields'>
        <div className='input-fields'>
          <label htmlFor="">Username</label>
          <input type="text" name="username" id="user" />
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="pass" />
        </div>
      </div>
    </LoginContainer>
  )
}

export default Login