import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Detect current route

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]); // Trigger this effect whenever the pathname changes

    return null; // This component doesn't render anything
};

export default ScrollToTop;
