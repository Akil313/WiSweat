"use client"

import React from 'react'
import moment from 'moment'
import { parseISO, format } from 'date-fns'
import { conv24To12, padHours, padMinutes } from 'app/lib/time'

const SweatPill = ({ data }: any) => {

  const [start_hour, isPM] = padHours(parseISO(data.start_time.slice(0, -1)).getHours())
  const start_minute = padMinutes(parseISO(data.start_time.slice(0, -1)).getMinutes())

  const start_time = `${start_hour}:${start_minute} ${isPM == 1 ? 'PM' : 'AM'}`

  return (
    <div className=' flex flex-grow border border-black max-w-xl space-x-4 p-4 items-center'>
      <div>{data.name}</div>
      <div>{data.attending.length}</div>
      <div>{start_time}</div>
      <button className='border rounded-xl p-2'>Going</button>
    </div>
  )
}

export default SweatPill