import { useEffect, useState } from "react";

export function withDataFetching(WrappedComponent) {
    return function WithDataFetchingComponent(props) {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            async function fetchData() {
                try {
                    const res = await fetch(
                        `${import.meta.env.VITE_API_BASE_URL}/api/movies`
                    );
                    if (!res.ok) throw new Error("Failed to fetch data");
                    const result = await res.json();
                    setData(result);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            }

            fetchData();
        }, []);

        if (loading) return <p className="text-gray-500">Loading data...</p>;
        if (error) return <p className="text-red-500">Error: {error}</p>;

        // Pass the fetched data down as a prop
        return <WrappedComponent data={data} {...props} />;
    };
}
