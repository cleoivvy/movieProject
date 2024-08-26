export const metadata ={
    title:"About| create a movie app",
    description:"Learn about | A movie application",
    keywords:"African movies"
};


import React, { Children } from 'react'

export default function Aboutlayout({Children}) {
  return (
    <div>
        <h1>About Page</h1>
        {Children}
        </div>
  )
}
