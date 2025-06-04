import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { clientWidth: width, clientHeight: height } =
        document.documentElement;
    return {
        width,
        height,
        md: width > 768,
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({
        width: 0,
        height: 0,
        md: false,
    });

    useEffect(() => {
        setWindowDimensions(getWindowDimensions());

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
