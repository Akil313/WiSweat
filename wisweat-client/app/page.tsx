import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
import SweatPill from './components/SweatPill';
import { getAllSweats } from './lib/sweats'
import { revalidateTag, revalidatePath } from 'next/cache';

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
