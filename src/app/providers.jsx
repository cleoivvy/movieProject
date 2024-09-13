"use client"
import { useState} from "react";
import { createContext } from "react";

const SidebarContext = createContext();

const SidebarProviders = ({ children }) => {
  const [val, setVal] = useState(0);
  const [movieItem, setMovieItem] = useState([]);

    if (storedData) {
      const { val: storedVal, movieItem: storedMovieItem } = JSON.parse(storedData);
      setVal(storedVal);
      setMovieItem(storedMovieItem);
    }
  };

  

  return (
    <div>
      <SidebarContext.Provider value={{ val, setVal, movieItem, setMovieItem, saveToLocalStorage, loadFromLocalStorage }}>
        {children}
      </SidebarContext.Provider>
    </div>
  );

export { SidebarProviders, SidebarContext };