import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleVisibleButton = () => {
            const position = window.scrollY;
            
            if (position > 150) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleVisibleButton);

        return () => window.removeEventListener("scroll", handleVisibleButton);
    }, []); 

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={`fixed bottom-10 right-10 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <button 
                onClick={scrollUp}
                className="p-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700"
            >
                <ArrowUp size={32} />
            </button>
        </div>
    );
}