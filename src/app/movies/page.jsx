"use client"
// Import necessary libraries and components
import React from 'react';
import { movies } from '../data'; // Import movie data
import Link from 'next/link'; // Import Link component from Next.js
import MovieCard from '../components/MovieCard'; // Import MovieCard component
import { useState } from 'react'; // Import useState hook
import { IoMdSearch } from 'react-icons/io'; // Import search icon

// Define the MoviePage component as a default export
export default function MoviePage() {
  // Define a state variable for search input
  const [searchMovies, setSearchMovie] = useState('');

  // Define a function to filter search input
  function filterSearch(e) {
    // Update the searchMovies state with the input value
    setSearchMovie(e.target.value);
  }

  // Filter the movie list based on the search input
  const filterLists = movies.filter(movie => {
    // Check if the title, category, actors, or country includes the search input
    return (
      String(movie.title).toLowerCase().includes(searchMovies.toLowerCase()) ||
      String(movie.category).toLowerCase().includes(searchMovies.toLowerCase()) ||
      String(movie.Actors.join()).toLowerCase().includes(searchMovies.toLowerCase()) ||
      String(movie.country).toLowerCase().includes(searchMovies.toLowerCase())
    );
  });

  // Define a variable to render the filtered movie list
  const cards = filterLists.length === 0 ? (
    // If no movies are found, render a "Not available" message
    <h1 className='text-white text-center text-2xl'>Ooops, Not available</h1>
  ) : (
    // Otherwise, map the filtered movie list to MovieCard components
    filterLists.map((card, index) => (
      <section key={index} className='text-white'>
         {/* Link to the movie details page */}
        <Link href={`/movies/${String(card.title).toLowerCase().split(' ').join('-')}`} title={card.title}>
           {/* Render the MovieCard component */}
          <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img} />
        </Link>
      </section>
    ))
  );

  // Return the JSX
  return (
    // Define the main container with a background image and styles
    <div className='pt-24 bg-[url(/homeGalaxzy.jpg)] h-fit-cover bg-contain'>
       {/* Define a div for the search input and icon */}
      <div className='flex items-center justify-between p-3 border-4 rounded-full mt-4 border-white w-3/5 m-auto'>
         {/* Define the search input field */}
        <input
          type='text'
          name='search'
          id='search'
          className='outline-none block text-white text-center bg-transparent mt-4 w-full text-2xl'
          placeholder='search for movie or category or actor'
          defaultValue={searchMovies}
          onChange={(e) => filterSearch(e)}
        />
         {/* Render the search icon */}
        <IoMdSearch className='text-3xl text-white' />
      </div>
       {/* Define a div for the filtered movie list */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-16 py-32 capitalize'>
         {/* Render the filtered movie list */}
        {cards}
      </div>
    </div>
  );
}