"use client"

import { useState } from "react"
import { useUser } from 'contexts/UserContext';
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useUser();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password)
  }

  return (
    <form onSubmit={handleLogin}>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Login</button>
    </form>
  )
}

const Logout = () => {
  const { logout } = useUser();

  const handleLogout = async () => {
    await logout();
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup } = useUser();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(name, email, password)
  }

  return (
    <form onSubmit={handleSignup}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  )
}

export const { data: session } = useSession()