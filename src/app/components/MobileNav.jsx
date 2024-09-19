"use client"
// Import necessary components and hooks
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import { useContext, useState } from 'react';
import { MdFavorite } from "react-icons/md"
import { IoHome } from "react-icons/io5"
import { SidebarContext } from "../providers";

// Define the MobileNav component
export default function MobileNav() {
  // Initialize state for navigation menu
  const [open, setOpen] = useState(false);
  // Access the SidebarContext context
  const { val } = useContext(SidebarContext)

  // Toggle navigation menu
  function toggleNav() {
    setOpen(!open);
  }

  // Close navigation menu
  function closeNav() {
    setOpen(false);
  }

  return (
    // Navigation menu container
    <nav>
       {/* Main navigation menu */}
      <ul className='bg-slate-900 flex text-white items-center justify-around md:hidden h-12 sm:h-10'>
         {/* Home icon */}
        <li className="hover:text-blue-500"><IoHome /></li>
         {/* Hamburger menu icon */}
        <li onClick={toggleNav}>
          <GiHamburgerMenu /> 
        </li>
      </ul>

       {/* Dropdown navigation menu (only visible when open is true) */}
      {open &&
      <ul className="bg-slate-900 flex flex-col justify-around text-white capitalize md:hidden items-center h-72 pr-32 sm:h-56 sm:pr-24">
         {/* Home link */}
        <Link href={'/'} onClick={closeNav}>
          <li className="hover:text-blue-500">home</li>
        </Link>

         {/* About link */}
        <Link href={'/about'} onClick={closeNav}>
          <li className="hover:text-blue-500">about</li>
        </Link>
        
         {/* Contact link */}
        <Link href={'/contact'} onClick={closeNav}>
          <li className="hover:text-blue-500">contact</li>
        </Link>

         {/* Help link */}
        <Link href={'/help'} onClick={closeNav}>
          <li className="hover:text-blue-500">help</li>
        </Link>

         {/* Cart link with dynamic value from SidebarContext */}
        <li>
          <Link href={'/wishes'} onClick={closeNav}>
            <li>{val}</li>
            <p className="hover:text-blue-500 text-2xl">
            <MdFavorite  onClick={closeNav}/>
            </p>
          </Link>
        </li>
      </ul>
      }
    </nav>
  );
    }