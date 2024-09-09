import React from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'



export default function MovieCard({title,Country, type,rat,img}) {
  return (
    
     <div className='bg-[url(/homeGalaxzy.jpg)] h-screen bg-contain  flex flex-col items-center'>
      <Image src={`/mv/${img}`} alt={title}
      width={'300'} height={'500'} className='border-radius'/>
      <p>
      <Rating name="half-rating-read" defaultValue={rat/2} precision={0.5} max={5} readOnly className='text-3xl ' />
      
      </p>
      <h1>{title}</h1>
      <p>{Country}</p>
      <p>{type}</p>
      

    </div>
  )
}
