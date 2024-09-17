"use client"
import React from 'react'
import { movies } from '../data'
import Link from 'next/link'
import MovieCard from '../components/MovieCard'
import { useState } from 'react'
import{IoMdSearch} from 'react-icons/io'



export default function MoviePage() {
  const [searchMovies, setSearchMovie] = useState('')

function filterSearch(e){
  setSearchMovie(e.target.value)
}
const filterLists =  movies.filter(movie => String(movie.title).toLowerCase().includes
(searchMovies.toLowerCase()) || String(movie.category).toLowerCase().includes(searchMovies.toLowerCase()) || String(movie.Actors.join()).toLowerCase().includes(searchMovies.toLowerCase()) 
|| String(movie.country).toLowerCase().includes(searchMovies.toLowerCase()))

  const cards = filterLists.length == 0 ? (
    <h1 className='text-white text-center text-2xl'>Ooops, Not available</h1>
  ) : filterLists.map((card,index) => (
    <section key={index} className='text-white'>
      <Link href={`/movies/${String(card.title).toLowerCase().split(' ').join('-')}`} title={card.title}>
      <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img}/>
      </Link>
    </section>
  ))


  return (
    <div className='pt-24 bg-[url(/homeGalaxzy.jpg)] h-fit-cover  bg-contain'>
    <div className='flex items-center justify-between p-3 border-4 rounded-full mt-4  border-white w-3/5
    m-auto'>
      <input type='text' name='search' id='search'
      className='outline-none block text-white text-center bg-transparent mt-4 w-full text-2xl' placeholder='search for movie or category or actor'
      defaultValue={searchMovies}
      onChange={(e)=>filterSearch(e)}/>
      <IoMdSearch className='text-3xl text-white'/>
      </div>
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 px-16 py-32 capitalize'>
      {cards}
      
    </div>
  </div>
  )
}
