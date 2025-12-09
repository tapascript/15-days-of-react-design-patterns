import { useState } from "react";
import NonVirtualList from "./NonVirtualList";
import VirtualList from "./VirtualList";
import { useFakeUsers } from "./data";

const VirtualizationDemo = () => {
    const users = useFakeUsers(50000);
    const [mode, setMode] = useState("virtual"); // "virtual" or "non-virtual"

    return (
        <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
            <h1>List Virtualization Demo</h1>

            <div style={{ marginBottom: 12 }}>
                <button
                    className="underline cursor-pointer"
                    onClick={() => setMode("virtual")}
                    disabled={mode === "virtual"}
                >
                    Use virtual list
                </button>
                <button
                    className="underline cursor-pointer"
                    onClick={() => setMode("non-virtual")}
                    disabled={mode === "non-virtual"}
                    style={{ marginLeft: 8 }}
                >
                    Use non-virtual list
                </button>
            </div>

            <div style={{ marginBottom: 8, color: "#fff" }}>
                Current mode: <strong>{mode}</strong> — Users: {users.length}
            </div>

            {mode === "virtual" ? (
                <VirtualList users={users} height={600} itemHeight={80} />
            ) : (
                <NonVirtualList users={users} />
            )}
        </div>
    );
};

export default VirtualizationDemo;
