import Image from 'next/image'
import React, { Suspense, useState } from 'react'
import Loading from './loading'
import SweatPill from './components/SweatPill';
import { getAllSweats } from './lib/sweats'
import { revalidateTag, revalidatePath } from 'next/cache';

import { useUser } from 'contexts/UserContext';

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

export default async function Home() {
  revalidatePath('/')

  const sweats = await getAllSweats()

  return (
    <div className='flex flex-col space-y-4'>
      {sweats.map((sweat: any) => (
        <SweatPill key={sweat.name} data={sweat} />
      ))}
    </div>
  )
}
