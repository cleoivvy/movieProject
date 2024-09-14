"use client"
import { useState, useEffect} from "react";
import { createContext } from "react";

const SidebarContext = createContext();

const SidebarProviders = ({ children }) => {
  const [val, setVal] = useState(0);
  const [movieItem, setMovieItem] = useState([]);

  
  
  useEffect(()=> {
    const storedData = localStorage.getItem("sidebarData");
      if (storedData) {
        const { val: storedVal, movieItem: storedMovieItem } = JSON.parse(storedData);
        setVal(storedVal);
        setMovieItem(storedMovieItem);
      }
    }, []

  )
    
    return (
      <div>
      <SidebarContext.Provider value={{ val, setVal, movieItem, setMovieItem}}>
        {children}
      </SidebarContext.Provider>
    </div>
  );
       
  };
  
export { SidebarProviders, SidebarContext };