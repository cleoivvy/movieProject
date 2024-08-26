import React from 'react'
import Image from 'next/image'
export default function MovieCard({title,type,rat,img}) {
  return (
     <div className='flex flex-col items-center'>
      <Image src={`/mv/${img}`} alt={title}
      width={'300'} height={'500'} className='rounded-md'/>
      <p>{rat}</p>
      <h1>{title}</h1>
      <p>{type}</p>
    </div>
  )
}
