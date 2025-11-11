import Toggle from "./components/Toggle";
import { customReducer } from "./reducers/toggle-reducer";
function App() {
  return (
    <div className="flex flex-col items-center m-8">
     <Toggle reducer={customReducer} onToggle={(v) => console.log(v)}/>
    </div>
  );
}

export default App;
