import React from 'react';

export default function Loading() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse delay-200"></div>
        <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse delay-400"></div>
      </div>
      <p>Loading...</p>
    </div>
  );
}