import Image from 'next/image'
import React, { Suspense, useState } from 'react'
import SweatPill from './components/SweatPill';
import { getAllSweats } from './lib/sweats'
import { revalidatePath } from 'next/cache';
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  revalidatePath('/')

  const session = await getServerSession(authOptions);
  const sweats = await getAllSweats()

  return (
    <div>
      <div>
        {JSON.stringify(session)}
      </div>
      <div className='flex flex-col space-y-4'>
        {sweats.map((sweat: any) => (
          <SweatPill key={sweat.name} data={sweat} />
        ))}
      </div>
    </div>
  )
}
