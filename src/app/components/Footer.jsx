// Import React and React Icons components
import React from 'react';
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa"

// Define the Footer component
export default function Footer() {
  return (
    // Footer element with styles for background and padding
    <footer className="bg-black pt-20 pb-6 h-auto ">
     {/* Container div element with styles for layout and padding */}
      <div className="mx-auto p-4">
        {/* Inner div element with styles for layout and spacing */}
        <div className="flex flex-wrap justify-center mb-4">
         {/* About Us section */}
          <div className="w-full md:w-1/2 sm:w-full p-6">
            <h5 className="uppercase text-white mb-2 hover:text-blue-500">About Us</h5>
            <p className="text-white">AfriqueCine is your premier destination for African movies, news, and entertainment. We showcase the richness and diversity of African cinema, highlighting talented actors, filmmakers, and stories from across the continent.</p>
          </div>
         {/* Contact Us section */}
          <div className="w-full md:w-1/2 sm:w-full p-6">
            <h5 className="uppercase text-white mb-2 hover:text-blue-500">Contact Us</h5>

            <p className="text-white">Stay connected with the latest updates and information on African entertainment.
            </p>
           {/* Contact information list */}
            <ul>
              <li className='text-white'>
               {/* Email input field with styles for layout and appearance */}
                <input type="email" name="email" id="email" placeholder='send us an email' className="w-full md:w-1/2 sm:w-full p-4 px-4 text-black" />
                <span className='px-2'>Email:info@afriquecine.com</span>
              </li>
             {/* Social media icons with styles for layout and hover effect */}
              <span className='text-white text-2xl pt-4 pb-5  flex flex-row gap-3'>
                <li className='hover:text-blue-500'>
                  <IoLogoInstagram />   
                </li>
                <li className='hover:text-blue-500'><FaFacebookSquare /></li>
                <li className='hover:text-blue-500'><IoLogoWhatsapp /></li>
                <li className='hover:text-blue-500'><FaTwitter /></li>
              </span>
              <li className='text-white'>
                Phone: +234020356789
              </li>
              <li className='text-white'>
                Address: No 24 St. Phills Yaba, Lagos.
              </li>
            </ul>
          </div>
        </div>
       {/* Copyright information */}
        <p className="text-center text-white"> 2024. All Rights Reserved. Powered by AfriqueCine.</p>
      </div>
    </footer>
  )
}