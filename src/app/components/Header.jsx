import React from 'react'

export default function Header() {
  return (
     <div className='grid md:grid-cols-6 md:grid-rows-[300px_300px_300px] grid-cols-1 grid-rows-[200px_200px_200px]'>
      <div className='bg-[url(/cinema.jpg)] md:col-span-4 md:row-span-3 bg-cover'></div>
      <div className='bg-[url(/difret.jpg)] md:row-span-2 md:col-span-2 bg-cover'></div>
      <div className='bg-[url(/ayanda.jpg)] bg-cover'></div>
      <div className='bg-[url(/felicite.jpg)] bg-cover'></div>
    </div>
    
  )
}
