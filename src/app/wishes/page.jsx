"use client"
import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../providers'
import Image from 'next/image'
import Delete from './Delete'
import { MdDelete } from "react-icons/md"

export default function wishList() {
const {movieItem} = useContext(SidebarContext)

  return (
    <div className='pt-24 text-white bg-[url(/homeGalaxzy.jpg)] h-[1000px] bg-cover bg-center bg-no-repeat'>
        {movieItem.length == 0 ?
        (
            <h2>Add Movie to Wish List</h2>
        )
        :
        (
            <div>
                <table className='w-4/5 m-auto'>
                <thead>
                    <tr>
                    <th className='px-10'>Image</th>
                        <th className='p-10'>Title</th>
                        <th className='p-10'>Epilogue</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {movieItem.map((movie, index) => (
                        <tr key={index}>

                        <td className='p-10'><Image src={`/mv/${movie.title}.jpg`} alt={movie.title} title={movie.cat} width={'150'}
                        height={'200'}/></td>
                        <td className='p-10'>{movie.title}</td>
                        <td>{movie.epi}</td>

                        <td>
                    <button
                    
                      className='bg-red-500 flex items-center flex-row-reverse rounded-sm'
                    >

                        <MdDelete className='font-bold text-3xl mr-2' index={index} title ={movie.title}/>
                        <Delete className='inline-flex' />
                    </button>
                  </td>
                        </tr>
                    ))
                    }
                </tbody>
                </table>
                </div>
        )
    }
    </div>
  )
}