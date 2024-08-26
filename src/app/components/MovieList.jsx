import React from 'react'
import MovieCard from './MovieCard'
import Link from 'next/link'
import { movies } from '../data'


export default function MovieList() {


const cards = movies.sort((x,y) =>y.rating - x.rating).map((card,index) => (
  <section key={index} className='text-white'>
    <Link href={`/movies/${String(card.title).toLowerCase().split(' ').join('-')}`} title={card.title}>
    <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img}/>
    </Link>
  </section>
)).slice(0,10)

return (
  <>
  <div className='grid grid-cols-3 gap-4 px-16 py-32 capitalize'>
    {cards}
   <Link href={'/movies'} className='flex items-center justify-center my-5'>
   <span className='bg-slate-900 text-white rounded-md p-3'>see more....</span>
   </Link>
   
  </div>
</>
)
}
