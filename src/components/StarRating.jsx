import React from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ rating, maxRating = 5 }) {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => {
        const fillPercent = Math.min(Math.max(rating - index, 0), 1); // Calculate fill for each star
        return (
          <div key={index} className="relative">
            {/* Background star */}
            <FaStar className="text-gray-300" />

            {/* Filled star */}
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercent * 100}%` }}
            >
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StarRating;
