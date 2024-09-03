"use client"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from 'next/link'
import {useState} from 'react'
import { IoMdCart } from "react-icons/io";

export default function MobileNav() {
const [open, setOpen] = useState(false)


function controlNav(){
    setOpen(!open)
}


  return (
    <nav>
        <ul className='bg-slate-900 flex text-white items-center justify-around md:hidden h-12'>
            <li>Home</li>
            <li onClick={controlNav}>
            <GiHamburgerMenu /> 
            </li>
        </ul>

        {open &&
        <ul className="bg-slate-900 flex flex-col justify-around text-white capitalize md:hidden items-center h-72 pr-32">
            <Link href={'/'}>
            <li >home</li>
            </Link>

            <Link href={'/about'}>
             <li>about</li>
            </Link>
            
            <Link href={'/contact'}>
            <li>contact</li>
            </Link>

            <Link href={'/help'}>
            <li>help</li>
             </Link>
            <p>
            <IoMdCart />
            </p>
            
        </ul>
        }
    </nav>
  )
}
