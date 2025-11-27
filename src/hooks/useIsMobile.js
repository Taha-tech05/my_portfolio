import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');

        // Set the initial value
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return isMobile;
};

export default useIsMobile;
