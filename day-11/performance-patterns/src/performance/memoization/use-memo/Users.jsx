import { useMemo } from "react";

function Users({ list }) {
    console.log("Users component rendered");

    // const sorted = list.sort((a, b) => a.localeCompare(b));

    const sorted = useMemo(() => {
        console.log("Sorting expensive list…");
        return [...list].sort((a, b) => a.localeCompare(b));
    }, [list]);

    return (
        <>
            <h2>Sorted Users</h2>
            {sorted.map((user, index) => (
                <div key={index}>{user}</div>
            ))}
        </>
    );
}

export default Users;
