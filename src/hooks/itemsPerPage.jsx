import { useState, useEffect } from "react";

// Returns the number of items to show per page depending on window width
function useItemsPerPage(breakpoints = { 1024: 3, 768: 2, 0: 1 }) {
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    function updateItemsPerPage() {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerPage(breakpoints[1024]);
      else if (width >= 768) setItemsPerPage(breakpoints[768]);
      else setItemsPerPage(breakpoints[0]);
    }
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, [breakpoints]);

  return itemsPerPage;
}

export default useItemsPerPage;