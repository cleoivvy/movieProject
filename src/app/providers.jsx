"use client"
import { useState, useEffect } from "react";
import { createContext } from "react";

const SidebarContext = createContext();

const SidebarProviders = ({ children }) => {
  const [val, setVal] = useState(0);
  const [movieItem, setMovieItem] = useState([]);

  const saveToLocalStorage = () => {
    localStorage.setItem("sidebarData", JSON.stringify({ val, movieItem }));
  };

  const loadFromLocalStorage = () => {
    const storedData = localStorage.getItem("sidebarData");
    if (storedData) {
      const { val: storedVal, movieItem: storedMovieItem } = JSON.parse(storedData);
      setVal(storedVal);
      setMovieItem(storedMovieItem);
    }
  };

  
  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  
  useEffect(() => {
    saveToLocalStorage();
  }, [val, movieItem]);

  return (
    <div>
      <SidebarContext.Provider value={{ val, setVal, movieItem, setMovieItem, saveToLocalStorage, loadFromLocalStorage }}>
        {children}
      </SidebarContext.Provider>
    </div>
  );
};

export { SidebarProviders, SidebarContext };