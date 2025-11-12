import { useReducer } from "react";
import { FormContext } from "../context";
import { defaultFormReducer } from "../reducers/form-reducer";

export function FormProvider({ reducer = defaultFormReducer, children }) {
    const [state, dispatch] = useReducer(reducer, {
        values: { name: "", email: "" },
        errors: {},
    });

    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    );
}
