// Importing React from the react library
import React from 'react';

// Exporting the default function component for the NotFound page
export default function NotFound() {
  // Returning the JSX structure for the NotFound page
  return (
    // Div element with a dark gray background, full screen height, and centered content
    <div className='bg-slate-950 h-screen flex flex-col items-center justify-center text-white'>
       {/* Heading element with a large font size, uppercase text, and bold font weight */}
      <h1 className='text-5xl uppercase font-bold mb-4'>
        Oops!
      </h1>
       {/* Paragraph element with a medium font size and a message indicating the page does not exist */}
      <p className='text-2xl mb-8'>
        Sorry, this page does not exist
      </p>
       {/* Div element with a spinner animation */}
      <div className='flex justify-center mb-12'>
         {/* Div element with a spinner border animation */}
        <div className='spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full' role='status'>
           {/* Span element with a screen reader only text */}
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
       {/* Div element with an SVG spinner animation */}
      <div className='flex justify-center mb-12'>
         {/* SVG element with a spinning animation */}
        <svg className='animate-spin h-12 w-15 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' >
           {/* Circle element with a white stroke and opacity */}
          <circle className='opacity-50' cx='12' cy='12' r='8' stroke='white' strokeWidth='5'></circle>
        </svg>
      </div>
       {/* Paragraph element with a suggestion to go back to the previous page */}
      <p className='text-lg'>
        You can try going back to the previous page.
      </p>
    </div>
  );
}