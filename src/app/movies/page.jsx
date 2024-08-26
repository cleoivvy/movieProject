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
const filterLists =  movies.filter(movie => String (movie.title).toLowerCase().includes
(searchMovies.toLowerCase()) || String (movie.Category).toLowerCase().includes(searchMovies.toLowerCase()) || String (movie.Actors).toLowerCase().includes(searchMovies.toLowerCase()) 
|| String (movie.Country).toLowerCase().includes(searchMovies.toLowerCase()))

  const cards = filterLists.length == 0 ? (
    <h1>Ooops, Not available</h1>
  ) : filterLists.map((card,index) => (
    <section key={index} className='text-white'>
      <Link href={`/movies/${String(card.title).toLowerCase().split(' ').join('-')}`} title={card.title}>
      <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img}/>
      </Link>
    </section>
  ))


  return (
    <>
    <div className='flex items-center justify-between p-3 border-4 rounded-full mt-4 border-slate-900 w-3/5
    m-auto'>
      <input type='text' name='search' id='search'
      className='outline-none block mt-4 w-4/5 text-2xl' placeholder='search for movie or category or actor'
      defaultValue={searchMovies}
      onChange={(e)=>filterSearch(e)}/>
      <IoMdSearch className='text-2xl'/>
      </div>
    <div className='bg-slate-900 grid grid-cols-3 gap-4 px-16 py-32 capitalize'>
      {cards}
    </div>
  </>
  )
}
