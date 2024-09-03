"use client"
import React from 'react'
import { movies} from '@/app/data'
import Link from 'next/link'
import MovieCard from '@/app/components/MovieCard'
import { useContext } from 'react'
import { SidebarContext } from '@/app/providers'
import { Abel } from 'next/font/google'


const ab = Abel({ subsets: ["latin"], weight: ['400'] });


export default function MovieDetails({params}) {
  const {setVal, movieItem, setMovieItem} = useContext(SidebarContext)

  const details =movies.find(movie => String(movie.title).toLowerCase().split(' ').join('-') == params.slug)

  function handleMovieAdd(){
    setVal(prev => prev + 1)
    setMovieItem([...movieItem, {title: details.Title, epi: details.Epilogue, cat: details.Category, dat: details.DateReleased}])
  }

    const relatedMovies = movies.filter((card => String(card.Category).toLowerCase() == details.Category && details.title !== card.title))

    const relatedCard = relatedMovies.map((card, index) => <Link href={`/movies/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer' key={index}>
    <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img} cat={card.Category} dat={card.DateReleased}/>
  </Link>)
    
  return (


    <div className='bg-[url(/homeGalaxzy.jpg)] bg-cover text-white px-16 pt-20 py-4 text-justify h-[1600px]'>
        <h1 className={`${ab.className} text-2xl`} >{details.title}</h1>
        <p>{details.Epilogue}</p>

        <ul>{details.Actors.map((det,index) => (
          <Link href={`/actors/${det.name.split(' ').join('-')}`} key={index}>
          <li>{det.name}
            <ul className='list-disc py-4 pl-16'>
              <li>{det.desc}</li>
            </ul>
          </li>
          </Link>
        ))}</ul>
        <p>{details.Category}</p>
    <div>
    <button onClick={handleMovieAdd} className='bg-slate-950  text-slate-50 p-3 rounded-md'>add to favourites</button>
    <h2 className='text-4xl font-bold pt-6'>Related movies</h2>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {relatedCard}
    </div>
    </div>
    </div>
  )
}
