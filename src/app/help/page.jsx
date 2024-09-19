// Import React library
import React from 'react';

// Define the Help component as a default export
export default function Help() {
  return (
    // Define the main container with a background image, padding, and styles
    <div 
      className='pt-24 text-white bg-[url(/homeGalaxzy.jpg)] h-[800px] bg-cover bg-center bg-no-repeat px-28' 
    >
       {/* Define a heading with a title */}
      <h1 className='text-4xl'>
        Help & Support
      </h1>
      
       {/* Define a paragraph with a welcome message */}
      <p>
        Welcome to AfroCine&apos;s Help page! Here, you&apos;ll find answers to frequently asked questions, troubleshooting tips, and resources to help you navigate our platform.
      </p>
      
       {/* Add a line break for spacing */}
      <br/>
      
       {/* Define a heading with a title for the FAQs section */}
      <p className='text-3xl'>
        FAQs
      </p>
      
       {/* Define an unordered list with FAQs */}
      <ul>
         {/* Define a list item for the first FAQ */}
        <li>
          What is AfroCine?:
        </li>

         {/* Define a list item for the second FAQ */}
        <li>
          How do I submit a film for review?:
        </li>

         {/* Define a list item for the third FAQ */}
        <li>
          How do I become a contributor?:
        </li>

         {/* Define a list item for the fourth FAQ */}
        <li>
          How do I advertise on AfroCine?:
        </li>
      </ul>
    </div>
  );
}