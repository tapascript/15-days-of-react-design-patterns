import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

export default function SearchBox() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 600);

    useEffect(() => {
        if (!debouncedQuery) return;

        console.log("API Call with:", debouncedQuery);

        // Simulated API:
        // fetch(`/api?q=${debouncedQuery}`)
    }, [debouncedQuery]);

    return (
        <div>
            <h3>Search User</h3>
            <input
                className="border rounded p-1"
                type="text"
                value={query}
                placeholder="Type to search…"
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}
