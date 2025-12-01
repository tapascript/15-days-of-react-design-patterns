import {useRef} from "react";

function RenderTracker() {
  const renders = useRef(0);
  renders.current++;

  return <p>Rendered: {renders.current} times</p>;
}

export default RenderTracker