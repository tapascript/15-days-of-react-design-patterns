import { useState } from "react";
import MemoizedCard from "./ProfileTracker";

const MemoizedProfileTracker = () => {
    const [value, setValue] = useState("");

    return (
        <div className="p-2 border rounded">
            <input
                className="border rounded p-1"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <MemoizedCard name="Tapas" />
        </div>
    );
};

export default MemoizedProfileTracker;
