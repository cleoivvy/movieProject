"use client"
import React, { useState } from 'react';
import { movies } from '@/app/data';
import Link from 'next/link';
import MovieCard from '@/app/components/MovieCard';
import { useContext } from 'react';
import { SidebarContext } from '@/app/providers';
import { Abel } from 'next/font/google';

const ab = Abel({ subsets: ["latin"], weight: ['400'] });

export default function MovieDetails({ params }) {
  const [added, setAdded] = useState("add to favourite");
  const [disable, setDisable] = useState(false);
  const { setVal, movieItem, setMovieItem } = useContext(SidebarContext);

  const details = movies.find(movie => String(movie.title).toLowerCase().split(' ').join('-') == params.slug);

  function handleMovieAdd() {
    setVal(prev => prev + 1);
    setDisable(true);
    setAdded('already added');
    setMovieItem([...movieItem, { title: details.title, epi: details.Epilogue, cat: details.category, dat: details.DateReleased, img: details.img }]);
  }

  const relatedMovies = movies.filter((card => card.category == details.category && details.title !== card.title));

  const relatedCard = relatedMovies.map((card, index) => <Link href={`/movies/${card.title.toLowerCase().split(' ').join('-')}`} title={card.title} className='cursor-pointer' key={index}>
    <MovieCard title={card.title} type={card.type} rat={card.rating} img={card.img} cat={card.category} dat={card.DateReleased} />
  </Link>);

  return (
    <div className='bg-[url(/homeGalaxzy.jpg)] bg-cover text-white px-28 pt-20 py-4 text-justify  md:h-fit-cover sm:h-fit-cover md:px-12 sm:px-6'>
      <h1 className={`${ab.className} text-2xl md:text-xl sm:text-lg`}>{details.title}</h1>
      <p>{details.Epilogue}</p>

      <ul>{details.Actors.map((det, index) => (
        <Link href={`/movies/${det.name.split(' ').join('-')}`} key={index}>
          <li>{det.name}
            <ul className='list-disc py-4 pl-10'>
              <li>{det.desc}</li>
            </ul>
          </li>
        </Link>
      ))}</ul>
      <p>{details.category}</p>
      <div>
        <button onClick={handleMovieAdd} className='bg-slate-950  text-slate-50 p-3 rounded-md hover:text-blue-500' disabled={disable}>{added}</button>
        <h2 className='text-4xl font-bold pt-6 md:text-3xl sm:text-2xl'>Related movies</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4 bg-cover bg-center bg-no-repeat h-fit'>
          {relatedCard}
        </div>
      </div>
    </div>
  );
}