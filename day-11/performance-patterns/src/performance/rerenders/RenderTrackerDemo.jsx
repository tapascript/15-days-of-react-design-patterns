import {useState} from 'react'
import RenderTracker from './RenderTracker';

const RenderTrackerDemo = () => {
  const [value, setValue] = useState("");

  return (
    <div className="p-2 border rounded">
      <RenderTracker />
      <input
        className="border rounded p-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default RenderTrackerDemo