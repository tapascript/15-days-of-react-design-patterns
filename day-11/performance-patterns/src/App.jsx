import RenderTrackerDemo from "./components/rerenders/RenderTrackerDemo";

import MemoizedProfileTracker from "./components/memization/MemoizedProfileTracker";

function App() {
    return (
        <div className="flex flex-col items-center m-2 space-y-3">
            <RenderTrackerDemo />
            <MemoizedProfileTracker />
        </div>
    );
}

export default App;
