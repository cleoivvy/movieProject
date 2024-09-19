"use client"
// Import necessary libraries and components
import React from 'react';
import { useContext } from 'react'; // Import useContext hook
import { SidebarContext } from '../providers'; // Import SidebarContext

// Define the Delete component as a default export
export default function Delete({ title }) {
  // Get the movieItem, setMovieItem, and setVal from the SidebarContext
  const { movieItem, setMovieItem, setVal } = useContext(SidebarContext);

  // Define a function to handle deletion
  const handleDelete = () => {
    // Decrement the setVal by 1
    setVal(prev => prev - 1);
    // Filter out the movie with the given title from the movieItem array
    setMovieItem(movieItem.filter(movie => movie.title !== title));
  };

  // Return the JSX
  return (
    // Define a div for the delete button
    <div>
       {/* Render the delete button */}
      <button
        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    </div>
  );
}