import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="relative h-screen md:h-screen sm:h-2/3">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/galaxzzy.mp4" type="video/mp4"/>
        </video>
        <div/>
        <div className="relative z-10 text-center p-4 md:p-6 sm:p-4">
          <p className="pb-40"></p>
          <p className="text-white text-center pt-10 hover:scale-110 md:text-6xl sm:text-4xl text-3xl">
            Welcome To
          </p>
          <p className="text-white text-center pt-10 hover:scale-110 md:text-6xl sm:text-4xl text-3xl">
             The Galaxy of African Movies
          </p>
        </div>
      </div>
    </div>
  );
}