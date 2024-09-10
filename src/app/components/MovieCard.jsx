import React from 'react';
import Image from 'next/image';
import { Rating } from '@mui/material';

export default function MovieCard({ title, Country, type, rat, img }) {
  return (
    <div className='bg-[url(/homeGalaxzy.jpg)] h-screen md:h-3/4 sm:h-2/3 bg-contain flex flex-col items-center'>
      <Image src={`/mv/${img}`} alt={title} width={'300'} height={'500'} className='border-radius md:w-2/3 sm:w-full' />
      <p>
        <Rating name="half-rating-read" defaultValue={rat / 2} precision={0.5} max={5} readOnly className='text-3xl md:text-2xl sm:text-xl' />
      </p>
      <h1 className='md:text-2xl sm:text-xl'>{title}</h1>
      <p className='md:text-lg sm:text-base'>{Country}</p>
      <p className='md:text-lg sm:text-base'>{type}</p>
    </div>
  );
}