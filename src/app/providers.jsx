"use client"
// Importing necessary hooks and createContext from React
import { useState, useEffect } from "react";
import { createContext } from "react";

// Creating a context for the sidebar
const SidebarContext = createContext();

// Creating a provider component for the sidebar context
const SidebarProviders = ({ children }) => {
  // Initializing state for val and movieItem
  const [val, setVal] = useState(0);
  const [movieItem, setMovieItem] = useState([]);

  // Using useEffect to retrieve data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("sidebarData");
    if (storedData) {
      const { val: storedVal, movieItem: storedMovieItem } = JSON.parse(storedData);
      setVal(storedVal);
      setMovieItem(storedMovieItem);
    }
  }, []);

  // Returning the provider component with the context value
  return (
    <div>
      <SidebarContext.Provider value={{ val, setVal, movieItem, setMovieItem }}>
        {children}
      </SidebarContext.Provider>
    </div>
  );
};

// Exporting the provider and context
export { SidebarProviders, SidebarContext };