import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const FormField = styled.div`
  display: flex;
  flex-direction: column;
`


const Login = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <LoginContainer>
      <h1>Log in to your Account</h1>
      <FormField>
        <div className='input-fields'>
          <label htmlFor="">Username</label>
          <input 
            type="text" 
            name="username" 
            id="user" 
            onChange={(e) => setUserName(e.target.value)}
            value = {userName}
          />
          <label htmlFor="">Password</label>
          <input 
            type="password" 
            name="password" 
            id="pass" 
            onChange={(e) => setPassword(e.target.value)}
            value = {password} 
          />
        </div>

        <button>Log In</button>
      </FormField> 
    </LoginContainer>
  )
}

export default Login;