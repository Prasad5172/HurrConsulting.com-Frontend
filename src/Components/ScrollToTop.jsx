import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can also use "auto" for immediate scrolling
    });
  }, [location.pathname]); // Runs whenever the route changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
