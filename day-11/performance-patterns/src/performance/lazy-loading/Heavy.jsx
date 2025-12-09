import { useMemo } from "react";

console.log("[Heavy module] module evaluated"); // important: shows when module is parsed/loaded

function generateBigData(count = 200000) {
    // simulate heavy CPU work and big data (but keep it synchronous for demonstration)
    const arr = new Array(count);
    for (let i = 0; i < count; i++) {
        arr[i] = `user-${i}-${Math.random().toString(36).slice(2, 9)}`;
    }
    return arr;
}

export default function Heavy() {
    // useMemo to avoid regenerating every render, but module eval is the heavy part
    const data = useMemo(() => {
        console.log("[Heavy] generating big data (expensive)");
        return generateBigData(200000); // adjust number for your machine
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>Heavy Component</h2>
            <p>Loaded heavy data length: {data.length}</p>
            <small>
                Check console: module evaluated and data generation logs.
            </small>
        </div>
    );
}
