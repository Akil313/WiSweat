'use client'

import React from 'react'
import { LiaBarsSolid } from "react-icons/lia";
import Avatar from './Avatar';
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';

import { session } from '../lib/auth'

const Header = () => {

  return (
    <>
      <header className='flex w-full items-center px-6 justify-between bg-green-500'>
        <LiaBarsSolid size='2em' />
        <Link href={"/api/auth/signin"}>
          <div>
            WiSweat
          </div>
        </Link>
        <button onClick={() => signIn()}>
          Sign In
        </button>
        <Avatar />
      </header>
    </>
  )
}

export default Header