import { Abel} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SidebarProviders } from "./providers";

const ab = Abel({ subsets: ["latin"], weight: '400' }); 

export const metadata = {
  title: "My movie app",
  description: "A Movie Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ab.className} min-h-screen`}>
        <SidebarProviders>
        <Navbar/> 

      <div className="min-h-screen">
      {children}
      </div>
      <Footer/>
        </SidebarProviders>
     
      </body>
    </html>
  );
}
