import { createContext, useContext } from "react";

// Create context for form state
export const FormContext = createContext(null);

// Hook to access form context
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("Form components must be used within a Form component");
    }
    return context;
};
