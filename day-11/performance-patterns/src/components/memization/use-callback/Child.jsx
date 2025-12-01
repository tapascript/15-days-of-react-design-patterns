import { memo } from "react";
const Child = memo(function Child({ onClick }) {
    console.log("Child Rendered");
    return <button onClick={onClick}>Click Me</button>;
});

export default Child;
