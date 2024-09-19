// Import necessary components
import React from 'react';
import MovieCard from './MovieCard';
import Link from 'next/link';
import { movies } from '../data';

// Define the MovieList component
export default function MovieList() {
  // Sort the movies array in descending order by rating and map to JSX elements
  const cards = movies.sort((x, y) => y.rating - x.rating).map((card, index) => (
    // Create a section element for each movie card
    <section key={index} className='text-white'>
  
      <Link href={`/movies/${String(card.title).toLowerCase().split(' ').join('-')}`} title={card.title}>
    
        <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img}/>
      </Link>
    </section>
  )).slice(0, 6) // Limit the number of movie cards to 6

  return (
    // Create a grid layout for the movie cards
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-4 sm:px-6 md:px-8 py-12 pt-10 capitalize'>
      {cards}
    </div>
  );
}