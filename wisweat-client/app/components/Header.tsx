import React from 'react'
import { LiaBarsSolid } from "react-icons/lia";
import Avatar from './Avatar';

const Header = () => {
  return (
    <>
      <header className='flex w-full items-center px-6 justify-between bg-green-500'>
        <LiaBarsSolid size='2em' />
        <div>
          WiSweat
        </div>
        <Avatar />
      </header>
    </>
  )
}

export default Header