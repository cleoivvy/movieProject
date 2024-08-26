import Link from "next/link"
import MobileNav from "./MobileNav"
export default function Navbar() {
  return (
   
    <nav>
        <ul className="flex justify-around capitalize items-center h-15
         bg-slate-950 text-white text-lg">
            <Link href={'/'}>
            <li>Home</li>
            </Link>

            <Link href={'/about'}>
             <li>About</li>
            </Link>
            
            <Link href={'/Contact'}>
            <li>Contact</li>
            </Link>

            <Link href={'/'}>
            <li>Help</li>
             </Link>
            
        </ul>
        <MobileNav/>
    </nav>
  )
}





