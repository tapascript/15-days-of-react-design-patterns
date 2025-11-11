import { useReducer } from "react";
import { toggleReducer } from "../reducers/toggle-reducer";

export default function Toggle({ reducer = toggleReducer, onToggle }) {
    const [state, dispatch] = useReducer(reducer, { on: false, clicks: 0 });
    const { on, clicks } = state;

    function handleToggle() {
        dispatch({ type: "toggle" });
        onToggle?.(!on);
    }

    return (
        <button
            onClick={handleToggle}
            className={`px-4 py-2 rounded-md text-white cursor-pointer ${
                state.on ? "bg-green-600" : "bg-red-500"
            }`}
        >
            {on ? "ON" : "OFF"} (Clicks: {clicks})
        </button>
    );
}
