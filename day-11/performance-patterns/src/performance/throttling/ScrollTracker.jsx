import { useEffect, useState } from "react";
import { useThrottle } from "./hooks/useThrottle";

export default function ScrollTracker() {
    const [scrollY, setScrollY] = useState(0);
    const throttledY = useThrottle(scrollY, 3000);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="border h-48 p-1">
            <h2 className="text-xl">Scroll Position (Throttled)</h2>
            <p>{throttledY}</p>
        </div>
    );
}
