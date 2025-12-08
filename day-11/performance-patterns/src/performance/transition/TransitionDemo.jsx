// TransitionDemo.jsx
import { useMemo, useState, useTransition } from "react";

// helper: create heavy list once
function createItems(count = 20000) {
    const arr = new Array(count);
    for (let i = 0; i < count; i++) {
        arr[i] = `Item ${i} - ${Math.random().toString(36).slice(2, 7)}`;
    }
    return arr;
}

const HEAVY_LIST = createItems(50000);

function HeavyList({ query }) {
    const filtered = useMemo(() => {
        // expensive CPU-bound task simulation
        // add an artificial delay for demo (avoid in production!)
        const res = HEAVY_LIST.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Filtered count:", res.length);
        return res.slice(0, 200); // render top 200 for demo
    }, [query]);

    return (
        <div
            style={{
                maxHeight: 300,
                overflow: "auto",
                border: "1px solid #ddd",
            }}
        >
            {filtered.map((item, i) => (
                <div
                    key={i}
                    style={{ padding: 8, borderBottom: "1px solid #eee" }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}

export default function TransitionDemo() {
    const [text, setText] = useState("");
    const [query, setQuery] = useState("");
    const [isPending, startTransition] = useTransition();

    function handleChange(e) {
        const val = e.target.value;
        setText(val); // immediate update — keeps input responsive

        // Mark heavy update as non-urgent:
        startTransition(() => {
            setQuery(val); // updating query triggers expensive filtering + renders
        });
    }

    return (
        <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
            <h2>useTransition Demo (Non-blocking updates)</h2>

            <div style={{ marginBottom: 10 }}>
                <input
                    className="border p-1 rounded"
                    value={text}
                    onChange={handleChange}
                    placeholder="Type to filter (feel the responsiveness)..."
                    style={{ width: 400, padding: 8 }}
                />

                <span style={{ marginLeft: 12 }}>
                    {isPending ? "Updating results…" : "Idle"}
                </span>
            </div>

            <HeavyList query={query} />
        </div>
    );
}
