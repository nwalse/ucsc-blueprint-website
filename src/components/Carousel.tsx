import React, { useEffect, useState } from "react";
import useItemsPerPage from "../hooks/itemsPerPage";

const Carousel = ({
  children,
  className = "",
  breakpoints = { 1024: 3, 768: 2, 0: 1 },
  ...props
}) => {
  const itemsPerPage = useItemsPerPage(breakpoints);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(React.Children.count(children) / itemsPerPage);

  useEffect(() => {
    setPage(0); // Reset to first page if itemsPerPage changes
  }, [itemsPerPage]);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const startIdx = page * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Slides - no arrows on the sides now */}
      <div className="w-fit mx-auto">
        <div className="flex gap-8">
          {React.Children.toArray(children).slice(startIdx, endIdx)}
        </div>
      </div>
      
      {/* Navigation bar with arrows and dots together */}
      <div className="flex items-center justify-center mt-12 gap-4">
        {/* Previous Arrow */}
        {totalPages > 1 && (
        <button
          onClick={goPrev}
          disabled={page === 0}
          className="bg-white rounded-full shadow p-2 disabled:opacity-40"
          aria-label="Previous"
        >
          <img src="/icons/leftArrow.svg" alt="Prev" className="h-6 w-6" />
        </button>
        )}
        
        {/* Pagination Dots */}
        {/* <div className="flex justify-center gap-2 mx-4">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <span
              key={idx}
              onClick={() => setPage(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                idx === page ? "bg-blueprint-blue" : "bg-gray-300"
              }`}
            />
          ))}
        </div> */}

        {/* Optional page indicator matching your screenshots */}
        <div className="border border-gray-300 rounded px-5 py-2 text-sm text-gray-600">
            Page {page + 1} of {totalPages}
        </div>
        
        {/* Next Arrow */}
        {totalPages > 1 && (
        <button
          onClick={goNext}
          disabled={page === totalPages - 1}
          className="bg-white rounded-full shadow p-2 disabled:opacity-40"
          aria-label="Next"
        >
          <img src="/icons/rightArrow.svg" alt="Next" className="h-6 w-6" />
        </button>
        )}
      </div>
      
    </div>
  );
};

export default Carousel;
