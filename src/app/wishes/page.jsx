"use client"
import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../providers'
import Image from 'next/image'
import Delete from './Delete'

export default function wishList() {
const {movieItem} = useContext(SidebarContext)



  return (
    <div className='pt-24 text-white bg-[url(/homeGalaxzy.jpg)] h-[1000px] bg-contain'>
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

                        <td><Image src={`/mv/${movie.img}`} alt={movie.title} title={movie.title} width={'150'} height={'200'}/></td>
                        <td className='px-5'>{movie.title}</td>
                        <td>{movie.epi}</td>

                        <td>
                    <Delete index={index} title ={movie.title}/>
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
