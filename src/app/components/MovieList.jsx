import React from 'react';
import MovieCard from './MovieCard';
import Link from 'next/link';
import { movies } from '../data';

export default function MovieList() {
  const cards = movies.sort((x, y) => y.rating - x.rating).map((card, index) => (
    <section key={index} className='text-white'>
      <Link href={`/movies/${String(card.title).toLowerCase().split(' ').join('-')}`} title={card.title}>
        <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img}/>
      </Link>
    </section>
  )).slice(0, 6)

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-4 sm:px-6 md:px-8 lg:px-10 py-12 pt-10 capitalize'>
        {cards}
      </div>
    </>
  );
}