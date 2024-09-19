// Import necessary components
import React from 'react';
import Image from 'next/image';
import { Rating } from '@mui/material';

// Define the MovieCard component
export default function MovieCard({ title, Country, type, rat, img }) {
  return (
    // Container div element
    <div className='h-fit-cover md:h-3/4 sm:h-2/3 bg-contain flex flex-col items-center'>
       {/* Image element */}
      <Image src={`/mv/${img}`} alt={title} width={'300'} height={'300'} className='border-radius md:w-2/3 sm:w-full' />
       {/* Rating element */}
      <p>
        <Rating name="half-rating-read" defaultValue={rat / 2} precision={0.5} max={5} readOnly className='text-xl md:text-2xl sm:text-xl' />
      </p>
       {/* Title element */}
      <h1 className='md:text-2xl sm:text-xl'>{title}</h1>
       {/* Country element */}
      <p className='md:text-lg sm:text-base'>{Country}</p>
       {/* Type element */}
      <p className='md:text-lg sm:text-base'>{type}</p>
    </div>
  );
}