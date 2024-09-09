"use client"
import Link from "next/link"
import MobileNav from "./MobileNav"
import { useContext } from "react"
import { SidebarContext } from "../providers"
import { IoMdCart } from "react-icons/io"


export default function Navbar() {
const {val} = useContext(SidebarContext)

  return (
   
    <nav className="fixed top-0 w-full">
        <ul className="md:flex hidden justify-around capitalize items-center h-16
         bg-black text-white text-lg">
            <Link href={'/'}>
            <li className="hover:text-blue-500">Home</li>
            </Link>

            <Link href={'/about'}>
             <li className="hover:text-blue-500">About</li>
            </Link>
            
            <Link href={'/contact'}>
            <li className="hover:text-blue-500">Contact</li>
            </Link>

            <Link href={'/help'}>
            <li className="hover:text-blue-500">Help</li>
             </Link>

            <Link href={'/wishes'}>
            <li>{val}</li>
            <p className="hover:text-blue-500">
            <IoMdCart />
            </p>
             </Link>
            
        </ul>
        <MobileNav/>
    </nav>
  )
}





