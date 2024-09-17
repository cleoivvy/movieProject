"use client"
import Header from './components/Header'
import { useState } from 'react'
import { movies } from './data'
import Link from 'next/link'
import MovieCard from './components/MovieCard'
import{IoMdSearch} from 'react-icons/io'



export default function Home() {

  const [searchMovies, setSearchMovie] = useState('')
  

  function filterSearch(e){
    setSearchMovie(e.target.value)
  }
  const filterLists =  movies.filter(movie => String(movie.title).toLowerCase().includes
  (searchMovies.toLowerCase()) || String(movie.category).toLowerCase().includes(searchMovies.toLowerCase()) || String(movie.Actors).toLowerCase().includes(searchMovies.toLowerCase()) 
  || String(movie.country).toLowerCase().includes(searchMovies.toLowerCase()))
  
    const cards = filterLists.length == 0 ? (
      <h1 className='text-white text-center text-2xl'>Ooops, Not available</h1>
    ) : filterLists.map((card,index) => (
      <section key={index} className='text-white'>
        <Link href={`/movies/${String(card.title).toLowerCase().split(' ').join('-')}`} title={card.title}>
        <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img}/>
        </Link>
        </section>
  )).slice(0,6) 

  
  return (

    <>
   <Header/>
  <div className='bg-[url(/homeGalaxzy.jpg)] h-fit bg-cover bg-center bg-no-repeat'>

  <h1 className='text-white text-4xl pt-10 flex justify-between px-28'> Top Rated Movie Reviews</h1>

  <div className='flex  justify-between p-3 border-4 rounded-full mt-4 border-white w-3/5
    m-auto'>
      <input type='text' name='search' id='search'
      className='outline-none bg-transparent text-white block mt-4 text-center text-2xl w-full' placeholder='search for movie/category/actor'
      defaultValue={searchMovies}
      onChange={(e)=>filterSearch(e)}/>
      <IoMdSearch className='text-4xl text-white'/>
      </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-20'>
  {cards}
    </div>
    <Link href={'/movies'} className='flex items-center justify-center my-5'>
          <span className='bg-black border-solid border-2 border-orange-600 text-white rounded-full p-3 pb-4 hover:text-blue-500'>see more</span>
        </Link>
  </div>
  </>

  
  
  )

}



