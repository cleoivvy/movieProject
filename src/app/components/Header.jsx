// Import React
import React from 'react';

// Define the Header component
export default function Header() {
  return (
    // Container div element
    <div>
       {/* Relative div element with styles for layout and spacing */}
      <div className="relative h-screen md:h-screen sm:h-2/3">
         {/* Video element with styles for layout and appearance */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
           {/* Source element with video file location and type */}
          <source src="/galaxzzy.mp4" type="video/mp4"/>
        </video>
         {/* Empty div element (consider removing or replacing with meaningful content) */}
        <div/>
         {/* Relative div element with styles for layout, spacing, and typography */}
        <div className="relative z-10 text-center p-4 md:p-6 sm:p-4">
           {/* Empty paragraph element with bottom padding (consider removing or replacing with meaningful content) */}
          <p className="pb-40"></p>
           {/* Text element with styles for layout, spacing, and typography */}
          <p className="text-white text-center pt-10 hover:scale-110 md:text-6xl sm:text-4xl text-3xl">
            Welcome To
          </p>
           {/* Text element with styles for layout, spacing, and typography */}
          <p className="text-white text-center pt-10 hover:scale-110 md:text-6xl sm:text-4xl text-3xl">
             The Galaxy of African Movies
          </p>
        </div>
      </div>
    </div>
  );
}