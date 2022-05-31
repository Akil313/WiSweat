import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  border: 1px solid black;
  align-items: center;
  row-gap: 20px;

  input,
  button {
    width: 20vw;
    height: 30px;
    border: 1px solid black;
    border-radius: 6px;
  }

  button {
    cursor: pointer;
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <h1>Log in to your Account</h1>
      <FormFields>
        <input type="text" name="username" id="user" placeholder="Username" />
        <input
          type="password"
          name="password"
          id="pass"
          placeholder="Password"
        />
        <button>Submit</button>
      </FormFields>
    </LoginContainer>
  );
};

export default Login;
