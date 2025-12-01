import RenderTrackerDemo from "./performance/rerenders/RenderTrackerDemo";

import MemoizedProfileTracker from "./performance/memization/memo/MemoizedProfileTracker";

import ChildDemo from "./performance/memization/use-callback/ChildDemo";

import UsersSortingDemo from "./performance/memization/use-memo/UsersSortingDemo";

import SearchBox from "./performance/debouncing/SearchBox";

function App() {
    return (
        <div className="flex flex-col items-center m-2 space-y-3">
            <RenderTrackerDemo />
            <MemoizedProfileTracker />
            <ChildDemo />
            <SearchBox />
            <UsersSortingDemo />
        </div>
    );
}

export default App;
