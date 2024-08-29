import Link from "next/link"
import MobileNav from "./MobileNav"
export default function Navbar() {
  return (
   
    <nav>
        <ul className="md:flex hidden justify-around capitalize items-center h-36
         bg-slate-950 text-white text-lg">
            <Link href={'/'}>
            <li>Home</li>
            </Link>

            <Link href={'/about'}>
             <li>About</li>
            </Link>
            
            <Link href={'/contact'}>
            <li>Contact</li>
            </Link>

            <Link href={'/help'}>
            <li>Help</li>
             </Link>
            
        </ul>
        <MobileNav/>
    </nav>
  )
}





