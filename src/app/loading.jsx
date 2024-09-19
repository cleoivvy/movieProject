// Importing React from the react library
import React from 'react';

// Exporting the default function component for the Loading indicator
export default function Loading() {
  // Returning the JSX structure for the Loading indicator
  return (
    // Div element with absolute positioning, centered horizontally and vertically
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
       {/* Div element with flexbox layout, justified center, and margin bottom of 4 units */}
      <div className="flex justify-center mb-4">
         {/* Three div elements with identical styles, animated with pulse effect */}
        <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse delay-200"></div>
        <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse delay-400"></div>
      </div>
       {/* Paragraph element with the text "Loading..." */}
      <p>Loading...</p>
    </div>
  );
}