"use client"
import { useState } from "react"
import { createContext } from "react"


const SidebarContext = createContext()

const SidebarProviders = ({children}) => {

    const [val, setVal] = useState(0)
    const [movieItem, setMovieItem] = useState([])
  return (
    <div>

    <SidebarContext.Provider value={{val, setVal,movieItem, setMovieItem}}>

        {children}
    </SidebarContext.Provider>
    </div>

  )
}

export  {SidebarProviders, SidebarContext}