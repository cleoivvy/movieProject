import React from 'react'
import { movies} from '@/app/data'
import Link from 'next/link'
import MovieCard from '@/app/components/MovieCard'





export default function MovieDetails({params}) {
  const details =movies.find(movie => String(movie.title).toLowerCase().split(' ').join('-') == params.slug)

    const relatedMovies = movies.filter((card => String(card.Category).toLowerCase() == details.Category && details.title !== card.title))

    const relatedCard = relatedMovies.map((card, index) => <Link href={`/movies/${card.title.split(' ').join('-')}`} title={card.title} className='cursor-pointer' key={index}>
    <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img}/>
  </Link>)
    
  return (
    <div>
        <h1>{details.title}</h1>
        <p>{details.Epilogue}</p>
        <p>{details.Actors}</p>
        <p>{details.Category}</p>
    <div>
    <h2 className='text-4xl font-bold'>Related movies</h2>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {relatedCard}
    </div>
    </div>
    </div>
  )
}
