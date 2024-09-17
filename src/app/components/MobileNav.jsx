"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import { useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { IoHome } from "react-icons/io5"

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  function controlNav() {
    setOpen(!open);
  }

  return (
    <nav>
      <ul className='bg-slate-900 flex text-white items-center justify-around md:hidden h-12 sm:h-10'>
        <li className="hover:text-blue-500"><IoHome /></li>
        <li onClick={controlNav}>
          <GiHamburgerMenu /> 
        </li>
      </ul>

      {open &&
      <ul className="bg-slate-900 flex flex-col justify-around text-white capitalize md:hidden items-center h-72 pr-32 sm:h-56 sm:pr-24">
        <Link href={'/'}>
          <li className="hover:text-blue-500">home</li>
        </Link>

        <Link href={'/about'}>
          <li className="hover:text-blue-500">about</li>
        </Link>
        
        <Link href={'/contact'}>
          <li className="hover:text-blue-500">contact</li>
        </Link>

        <Link href={'/help'}>
          <li className="hover:text-blue-500">help</li>
        </Link>

        <li>
        
        </li>

        <p className="hover:text-blue-500">
          <IoMdCart />
        </p>
      </ul>
      }
    </nav>
  );
}