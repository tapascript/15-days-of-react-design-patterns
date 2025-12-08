// DeferredDemo.jsx
import { useDeferredValue, useMemo, useState } from "react";

function createLargeList(count = 20000) {
    const arr = new Array(count);
    for (let i = 0; i < count; i++) {
        arr[i] = `Product ${i} - ${Math.random().toString(36).slice(2, 6)}`;
    }
    return arr;
}

const PRODUCTS = createLargeList(20000);

function ProductsList({ filter }) {
    const filtered = useMemo(() => {
        console.log("Products filtering for:", filter);
        return PRODUCTS.filter((p) =>
            p.toLowerCase().includes(filter.toLowerCase())
        ).slice(0, 200);
    }, [filter]);

    return (
        <div
            style={{
                maxHeight: 300,
                overflow: "auto",
                border: "1px solid #ddd",
            }}
        >
            {filtered.map((p, i) => (
                <div
                    key={i}
                    style={{ padding: 8, borderBottom: "1px solid #eee" }}
                >
                    {p}
                </div>
            ))}
        </div>
    );
}

export default function DeferredDemo() {
    const [text, setText] = useState("");
    // deferredText will update less aggressively than text
    const deferredText = useDeferredValue(text);

    return (
        <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
            <h2>useDeferredValue Demo (Deferred heavy updates)</h2>

            <div style={{ marginBottom: 10 }}>
                <input
                    className="border p-1 rounded"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type to filter (UI remains instant because heavy filtering is deferred)"
                    style={{ width: 400, padding: 8 }}
                />
                <span style={{ marginLeft: 12 }}>
                    {text === deferredText
                        ? "Results up-to-date"
                        : "Results are deferred"}
                </span>
            </div>

            <ProductsList filter={deferredText} />
        </div>
    );
}
