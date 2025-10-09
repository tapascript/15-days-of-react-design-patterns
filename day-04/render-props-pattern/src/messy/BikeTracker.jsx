import { useState } from "react";

const BikeTracker = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    function handleMouseMove(e) {
        setPos({ x: e.clientX, y: e.clientY });
    }

    return (
        <div
            className="border p-2 w-full h-48 my-2"
            onMouseMove={handleMouseMove}
        >
            <p>
                🏍️ Bike is at ({pos.x}, {pos.y})
            </p>
        </div>
    );
};

export default BikeTracker;
