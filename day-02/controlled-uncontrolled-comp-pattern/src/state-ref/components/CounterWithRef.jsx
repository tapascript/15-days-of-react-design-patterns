import { useRef, useState } from "react";

function CounterWithRef() {
    const countRef = useRef(0); // persists between renders
    const [renderCount, setRenderCount] = useState(0); // for forcing re-renders

    const increment = () => {
        countRef.current = countRef.current + 1; // update ref
        console.log("Ref Count:", countRef.current);
    };

    return (
        <div className="flex justify-around w-full">
            <div>
                <h2 className="text-2xl">Ref Count: {countRef.current}</h2>
                <button className="bg-purple-500 text-white p-1 rounded" onClick={increment}>Increment Ref Count</button>
            </div>

            <div>
                <h2 className="text-2xl">Render Count: {renderCount}</h2>
                <button className="bg-purple-500 text-white p-1 rounded" onClick={() => setRenderCount(renderCount + 1)}>
                    Force Re-render
                </button>
            </div>
        </div>
    );
}

export default CounterWithRef;
