import DefaultSlotDemo from "./default-slot/DefaultSlotDemo";
import SlotsMapLayoutDemo from "./named-slot-map/SlotsMapLayoutDemo";
import CardWithSlotDemo from "./named-slots/CardWithSlotDemo";
function App() {
    return (
        <div className="flex flex-col items-center m-2 space-y-2">
            <DefaultSlotDemo />
            <CardWithSlotDemo />
            <SlotsMapLayoutDemo />
        </div>
    );
}

export default App;
