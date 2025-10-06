import BikeTracker from "./messy/BikeTracker";
import CarTracker from "./messy/CarTracker";

function App() {
    return (
        <div className="flex flex-col items-center m-2">
            <CarTracker />
            <BikeTracker />
        </div>
    );
}

export default App;
