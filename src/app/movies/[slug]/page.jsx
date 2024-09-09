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
    setMovieItem([...movieItem, {title: details.title, epi: details.Epilogue, cat: details.category, dat: details.DateReleased,img:details.img}])
  }

    const relatedMovies = movies.filter((card => card.category == details.category && details.title !== card.title))

    const relatedCard = relatedMovies.map((card, index) => <Link href={`/movies/${card.title.toLowerCase().split(' ').join('-')}`} title={card.title} className='cursor-pointer' key={index}>
    <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img} cat={card.category} dat={card.DateReleased}/>
  </Link>)
    
  return (


    <div className='bg-[url(/homeGalaxzy.jpg)] bg-cover text-white px-28 pt-20 py-4 text-justify h-[1800px]'>
        <h1 className={`${ab.className} text-2xl`} >{details.title}</h1>
        <p>{details.Epilogue}</p>

        <ul>{details.Actors.map((det,index) => (
          <Link href={`/movies/${det.name.split(' ').join('-')}`} key={index}>
          <li>{det.name}
            <ul className='list-disc py-4 pl-16'>
              <li>{det.desc}</li>
            </ul>
          </li>
          </Link>
        ))}</ul>
        <p>{details.category}</p>
    <div>
    <button onClick={handleMovieAdd} className='bg-slate-950  text-slate-50 p-3 rounded-md hover:text-blue-500'>add to favourites</button>
    <h2 className='text-4xl font-bold pt-6'>Related movies</h2>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {relatedCard}
    </div>
    </div>
    </div>
  )
}
