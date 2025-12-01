import RenderTrackerDemo from "./components/rerenders/RenderTrackerDemo";

import MemoizedProfileTracker from "./components/memization/memo/MemoizedProfileTracker";

import ChildDemo from "./components/memization/use-callback/ChildDemo";

import UsersSortingDemo from "./components/memization/use-memo/UsersSortingDemo";

function App() {
    return (
        <div className="flex flex-col items-center m-2 space-y-3">
            <RenderTrackerDemo />
            <MemoizedProfileTracker />
            <ChildDemo />
            <UsersSortingDemo />
        </div>
    );
}

export default App;
