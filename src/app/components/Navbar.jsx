"use client"
// Import necessary modules and components
import Link from "next/link"; // Client-side routing
import MobileNav from "./MobileNav"; // Mobile navigation component
import { useContext } from "react"; // React hook for accessing context
import { SidebarContext } from "../providers"; // Context provider for sidebar
import { MdFavorite } from "react-icons/md" // Icon library

// Define the Navbar component as a default export
export default function Navbar() {
  // Use the useContext hook to access the SidebarContext and retrieve the val value
  const { val } = useContext(SidebarContext);

  return (
    // Define the navigation bar with a fixed position and full width
    <nav className="fixed top-0 w-full">
      {/* Define the navigation links as an unordered list */}
      <ul
        // Use CSS classes to style the list (assuming they are defined in a separate CSS file)
        className="md:flex hidden justify-around capitalize items-center h-16 bg-black text-white text-lg"
      >
        {/* Define each navigation link as a list item */}
        {/* Link to the homepage */}
        <Link href={'/'}>
          <li className="hover:text-blue-500">Home</li>
        </Link>

        {/* Link to the about page */}
        <Link href={'/about'}>
          <li className="hover:text-blue-500">About</li>
        </Link>

        {/* Link to the contact page */}
        <Link href={'/contact'}>
          <li className="hover:text-blue-500">Contact</li>
        </Link>

        {/* Link to the help page */}
        <Link href={'/help'}>
          <li className="hover:text-blue-500">Help</li>
        </Link>

        {/* Link to the wishes page, displaying the val value from the SidebarContext */}
        <Link href={'/wishes'}>
          <li>{val}</li>
          {/* Display the favorite icon */}
          <p className="hover:text-blue-500 text-2xl">
          <MdFavorite />
          </p>
        </Link>
      </ul>
      {/* Render the MobileNav component */}
      <MobileNav />
    </nav>
  );
}