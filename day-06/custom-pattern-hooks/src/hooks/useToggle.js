import { useState } from "react";

function useToggle(initial = false) {
    const [value, setValue] = useState(initial);
    const toggle = () => setValue((prev) => !prev);
    return [value, toggle];
}

export { useToggle }
