import RenderTrackerDemo from "./performance/rerenders/RenderTrackerDemo";

import MemoizedProfileTracker from './performance/memoization/memo/MemoizedProfileTracker'

import ChildDemo from "./performance/memoization/use-callback/ChildDemo";

import UsersSortingDemo from "./performance/memoization/use-memo/UsersSortingDemo";

import SearchBox from "./performance/debouncing/SearchBox";

import ScrollTracker from "./performance/throttling/ScrollTracker";

function App() {
    return (
        <div className="flex flex-col items-center m-2 space-y-3">
            <ScrollTracker />
            <RenderTrackerDemo />
            <MemoizedProfileTracker />
            <ChildDemo />
            <SearchBox />
            <UsersSortingDemo />
        </div>
    );
}

export default App;
