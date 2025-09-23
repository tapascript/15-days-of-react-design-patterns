import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state variable

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h2 className="text-2xl">Count: {count}</h2>
      <button className="bg-purple-500 text-white p-1 rounded" onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;