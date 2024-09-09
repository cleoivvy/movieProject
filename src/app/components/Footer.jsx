import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-6 h-auto ">
      <div className="mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 sm:w-full p-6">
            <h5 className="uppercase text-white mb-2 hover:text-blue-500">About Us</h5>
            <p className="text-white">AfriqueCine is your premier destination for African movies, news, and entertainment. We showcase the richness and diversity of African cinema, highlighting talented actors, filmmakers, and stories from across the continent.</p>
          </div>
          <div className="w-full md:w-1/2 sm:w-full p-6">
            <h5 className="uppercase text-white mb-2 hover:text-blue-500">Contact Us</h5>

            <p className="text-white">Stay connected with the latest updates and information on African entertainment.
            </p>
            <ul>
              <li className='text-white'>
                <input type="email" name="email" id="email" placeholder='send us an email' className="w-full md:w-1/2 sm:w-full p-4 px-4" />
                <span className='px-2'>Email:info@afriquecine.com</span>
              </li>
              <li className='text-white'>
                Phone: +234020356789
              </li>
              <li className='text-white'>
                Address: No 24 St. Phills Yaba, Lagos.
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-white"> 2024. All Rights Reserved. Powered by AfriqueCine.</p>
      </div>
    </footer>
  )
}