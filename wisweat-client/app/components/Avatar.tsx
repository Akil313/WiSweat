import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div >
      <Image className='rounded-full' src={"/images/doggo.jpg"} width={75} height={75} alt='User Profile Pic' />
    </div>
  )
}

export default Avatar