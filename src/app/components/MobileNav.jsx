"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import { useContext, useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { IoHome } from "react-icons/io5"
import { SidebarContext } from "../providers";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const {val} = useContext(SidebarContext)

  function toggleNav() {
    setOpen(!open);
  }

  function closeNav() {
    setOpen(false);
  }

  return (
    <nav>
      <ul className='bg-slate-900 flex text-white items-center justify-around md:hidden h-12 sm:h-10'>
        <li className="hover:text-blue-500"><IoHome /></li>
        <li onClick={toggleNav}>
          <GiHamburgerMenu /> 
        </li>
      </ul>

      {open &&
      <ul className="bg-slate-900 flex flex-col justify-around text-white capitalize md:hidden items-center h-72 pr-32 sm:h-56 sm:pr-24">
        <Link href={'/'} onClick={closeNav}>
          <li className="hover:text-blue-500">home</li>
        </Link>

        <Link href={'/about'} onClick={closeNav}>
          <li className="hover:text-blue-500">about</li>
        </Link>
        
        <Link href={'/contact'} onClick={closeNav}>
          <li className="hover:text-blue-500">contact</li>
        </Link>

        <Link href={'/help'} onClick={closeNav}>
          <li className="hover:text-blue-500">help</li>
        </Link>

        <li>
        <Link href={'/wishes'} onClick={closeNav}>
        
            <li>{val}</li>
            <p className="hover:text-blue-500">
            <IoMdCart />
            </p>
             </Link>
        </li>
      </ul>
      }
    </nav>
  );
}