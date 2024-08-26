import React from 'react'
import { movies} from '@/app/data'
export default function MovieDetails({params}) {
    const details =movies.find(movie => String(movie.title).toLowerCase().split(' ').join('-') == params.slug)
  return (
    <div>
        <h1>x{details.title}</h1>
        <p>{details.Epilogue}</p>
        <p>{details.Actors}</p>
        <p>{details.Category}</p>
    </div>
  )
}
