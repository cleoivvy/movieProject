import React from 'react';

export default function NotFound() {
  return (
    <div className='bg-slate-950 h-screen flex flex-col items-center justify-center text-white'>
      <h1 className='text-5xl uppercase font-bold mb-4'>
        Oops!
      </h1>
      <p className='text-2xl mb-8'>
        Sorry, this page does not exist
      </p>
      <div className='flex justify-center mb-12'>
        <div className='spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full' role='status'>
          <span className='sr-only'>Loading...</span>

          <div className='flex justify-center mb-12'>
        <svg className='animate-spin h-12 w-15 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' >
          <circle className='opacity-50' cx='12' cy='12' r='8' stroke='white' strokeWidth='5'></circle>
        </svg>
      </div>
        </div>
      </div>
      <p className='text-lg'>
        You can try going back to the previous page.
      </p>
    </div>
  );
}