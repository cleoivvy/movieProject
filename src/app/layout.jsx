// Importing Abel from next/font/google, which is used to load Google Fonts
import { Abel } from "next/font/google";

// Importing the global CSS file
import "./globals.css";

// Importing the Navbar component
import Navbar from "./components/Navbar";

// Importing the Footer component
import Footer from "./components/Footer";

// Importing the SidebarProviders component
import { SidebarProviders } from "./providers";

// Creating an instance of the Abel font with subsets of "latin" and weight of "400"
const ab = Abel({ subsets: ["latin"], weight: '400' }); 

// Exporting metadata for the application
export const metadata = {
  // Title of the application
  title: "My movie app",
  // Description of the application
  description: "A Movie Application",
};

// Exporting the default function component for the RootLayout
export default function RootLayout({ children }) {
  // Returning the HTML structure for the application
  return (
    // HTML element with lang attribute set to "en"
    <html lang="en">
       {/* Body element with className set to the Abel font class and min-h-screen */}
      <body className={`${ab.className} min-h-screen`}>
         {/* SidebarProviders component that wraps the Navbar and Footer components */}
        <SidebarProviders>
           {/* Navbar component */}
          <Navbar/> 
          
           {/* Div element with className set to min-h-screen that wraps the children components */}
          <div className="min-h-screen">
             {/* Children components */}
            {children}
          </div>
           {/* Footer component */}
          <Footer/>
        </SidebarProviders>
      
      </body>
    </html>
  );
}