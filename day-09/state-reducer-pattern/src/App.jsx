import FormFields from "./components/FormFields";
import Toggle from "./components/Toggle";
import { FormProvider } from "./provider/FormProvider";
import { customFormReducer } from "./reducers/form-reducer";
import { customToggleReducer } from "./reducers/toggle-reducer";
function App() {
    return (
        <div className="flex flex-col items-center m-8 space-y-2">
            <Toggle
                reducer={customToggleReducer}
                onToggle={(v) => console.log(v)}
            />
            <FormProvider reducer={customFormReducer}>
                <FormFields />
            </FormProvider>
        </div>
    );
}

export default App;
