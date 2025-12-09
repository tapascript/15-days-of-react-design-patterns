import RenderTrackerDemo from "./performance/rerenders/RenderTrackerDemo";

import MemoizedProfileTracker from "./performance/memoization/memo/MemoizedProfileTracker";

import ChildDemo from "./performance/memoization/use-callback/ChildDemo";

import UsersSortingDemo from "./performance/memoization/use-memo/UsersSortingDemo";

import SearchBox from "./performance/debouncing/SearchBox";

import ScrollTracker from "./performance/throttling/ScrollTracker";

const PartOne = () => {
    return (
        <>
            <ScrollTracker />
            <RenderTrackerDemo />
            <MemoizedProfileTracker />
            <ChildDemo />
            <SearchBox />
            <UsersSortingDemo />
        </>
    );
};

export default PartOne;
