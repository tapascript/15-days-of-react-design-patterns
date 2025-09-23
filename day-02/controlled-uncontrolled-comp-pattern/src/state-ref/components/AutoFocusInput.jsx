import { useRef, useEffect } from "react";

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // directly access DOM
  }, []);

  return <input
            className="border rounded-2xl p-2 my-3"
            ref={inputRef}
            placeholder="Type here..." />;
}

export default AutoFocusInput;