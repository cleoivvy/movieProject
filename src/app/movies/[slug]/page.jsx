"use client"
// Import necessary libraries and components
import React, { useState } from 'react';
import { movies } from '@/app/data'; // Import movie data
import Link from 'next/link'; // Import Link component from Next.js
import MovieCard from '@/app/components/MovieCard'; // Import MovieCard component
import { useContext } from 'react'; // Import useContext hook
import { SidebarContext } from '@/app/providers'; // Import SidebarContext
import { Abel } from 'next/font/google'; // Import Abel font from Google Fonts

// Define the Abel font with subsets and weight
const ab = Abel({ subsets: ["latin"], weight: ['400'] });

// Define the MovieDetails component as a default export
export default function MovieDetails({ params }) {
  // Define state variables for added and disable
  const [added, setAdded] = useState("add to favourite");
  const [disable, setDisable] = useState(false);

  // Get the setVal, movieItem, and setMovieItem from the SidebarContext
  const { setVal, movieItem, setMovieItem } = useContext(SidebarContext);

  // Find the movie details based on the params.slug
  const details = movies.find(movie => String(movie.title).toLowerCase().split(' ').join('-') == params.slug);

  // Define a function to handle movie addition
  function handleMovieAdd() {
    // Increment the setVal by 1
    setVal(prev => prev + 1);
    // Set disable to true
    setDisable(true);
    // Set added to 'already added'
    setAdded('already added');
    // Add the movie to the movieItem array
    setMovieItem([...movieItem, { title: details.title, epi: details.Epilogue, cat: details.category, dat: details.DateReleased, img: details.img }]);
  }

  // Filter related movies based on the category and title
  const relatedMovies = movies.filter((card => card.category == details.category && details.title !== card.title));

  // Map related movies to MovieCard components
  const relatedCard = relatedMovies.map((card, index) => (
    // Link to the movie details page
    <Link href={`/movies/${card.title.toLowerCase().split(' ').join('-')}`} title={card.title} className='cursor-pointer' key={index}>
       {/* Render the MovieCard component */}
      <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img} cat={card.category} dat={card.DateReleased} />
    </Link>
  ));

  // Return the JSX
  return (
    // Define the main container with a background image and styles
    <div className='bg-[url(/homeGalaxzy.jpg)] bg-cover text-white px-28 pt-20 py-4 text-justify  md:h-fit-cover sm:h-fit-cover md:px-12 sm:px-6'>
       {/* Render the movie title with the Abel font */}
      <h1 className={`${ab.className} text-2xl md:text-xl sm:text-lg`}>{details.title}</h1>
       {/* Render the movie epilogue */}
      <p>{details.Epilogue}</p>

       {/* Render the actors list */}
      <ul>{details.Actors.map((det, index) => (
        // Link to the actor's page
        <Link href={`/movies/${det.name.split(' ').join('-')}`} key={index}>
           {/* Render the actor's name and description */}
          <li>{det.name}
            <ul className='list-disc py-4 pl-10'>
              <li>{det.desc}</li>
            </ul>
          </li>
        </Link>
      ))}</ul>
       {/* Render the movie category */}
      <p>{details.category}</p>
       {/* Define a div for the add to favourite button and related movies */}
      <div>
         {/* Render the add to favourite button */}
        <button onClick={handleMovieAdd} className='bg-slate-950  text-slate-50 p-3 rounded-md hover:text-blue-500' disabled={disable}>{added}</button>
         {/* Render the related movies heading */}
        <h2 className='text-4xl font-bold pt-6 md:text-3xl sm:text-2xl'>Related movies</h2>

         {/* Render the related movies grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4 bg-cover bg-center bg-no-repeat h-fit'>
           
          {relatedCard}
        </div>
      </div>
    </div>
  );
}