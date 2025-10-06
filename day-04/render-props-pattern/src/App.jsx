// import BikeTracker from "./messy/BikeTracker";
// import CarTracker from "./messy/CarTracker";

// import MouseTrackerDemo from "./with-pattern/MouseTrackerDemo";

import MouseTrackerWithChildrenDemo from "./with-pattern/using-children/MouseTrackerWithChildrenDemo";

function App() {
    return (
        <div className="flex flex-col items-center m-2">
            {/*<CarTracker />
            <BikeTracker />

            <MouseTrackerDemo />*/}

            <MouseTrackerWithChildrenDemo />
        </div>
    );
}

export default App;
