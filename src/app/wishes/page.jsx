"use client"
// Import necessary libraries and components
import React from 'react';
import { useContext } from 'react'; // Import useContext hook
import { SidebarContext } from '../providers'; // Import SidebarContext
import Image from 'next/image'; // Import Image component from Next.js
import Delete from './Delete'; // Import Delete component
import { MdDelete } from "react-icons/md"; // Import delete icon

// Define the WishList component as a default export
export default function WishList() {
  // Get the movieItem from the SidebarContext
  const { movieItem } = useContext(SidebarContext);

  // Return the JSX
  return (
    // Define a div for the wishlist container
    <div className='pt-24 text-white bg-[url(/homeGalaxzy.jpg)] h-[1000px] text-wrap  w-full bg-cover bg-center bg-no-repeat'>
       {/* Check if the movieItem array is empty */}
      {movieItem.length === 0 ? (
        // If empty, render a message to add movies to the wishlist
        <h2>Add Movie to Wish List</h2>
      ) : (
        // If not empty, render a table with movie items
        <div>
          <table className='w-4/5 m-auto'>
            <thead>
              <tr>
                <th className='px-6'>Image</th>
                <th className='p-6'>Title</th>
                <th className='p-10'>Epilogue</th>
              </tr>
            </thead>
            <tbody>
              {movieItem.map((movie, index) => (
                <tr key={index}>
                   {/* Render the movie image */}
                  <td className='p-6'>
                    <Image
                      src={`/mv/${movie.title}.jpg`}
                      alt={movie.title}
                      title={movie.cat}
                      width={'150'}
                      height={'200'}
                    />
                  </td>
                   {/* Render the movie title */}
                  <td className='p-10'>{movie.title}</td>
                   {/* Render the movie epilogue */}
                  <td>{movie.epi}</td>
                   {/* Render the delete button */}
                  <td>
                    <button
                      className='bg-red-500 flex items-center flex-row-reverse rounded-full ml-8'
                    >
                       {/* Render the delete icon */}
                      <MdDelete className='font-bold text-3xl mr-2'/>
                       {/* Render the Delete component with onDelete handler and title prop */}
                      <Delete onDelete={() => handleDelete(index)} title={movie.title} className='inline-flex' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}