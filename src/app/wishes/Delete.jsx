"use client"
import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../providers'


export default function Delete({title}) {
    const {movieItem, setMovieItem, setVal} = useContext(SidebarContext)

    const handleDelete = () => {
    setVal(prev => prev - 1)
    setMovieItem(movieItem.filter(movie => movie.title !== title))
}

  return (
    <div>

    <button
    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
    onClick={() => handleDelete()}
    >
    Delete
  </button>
    </div>
  )
}
