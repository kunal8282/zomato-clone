import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="rounded-lg overflow-hidden bg-gray-200 animate-pulse mb-4">
        <div className="h-72 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
      </div>

      <div className="flex gap-3">
        <div className="h-72 w-60 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-2"></div>
    
        {[1, 2, 3, 4, 5].map((element, index) => (
          <div className="h-52 w-56 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-2" key={index}></div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
