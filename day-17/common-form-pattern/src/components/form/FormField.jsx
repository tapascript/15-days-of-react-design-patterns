import { useFormContext } from "./FormContext";

/**
 * FormField component - handles individual form fields
 */
export const FormField = ({
    name,
    label,
    type = "text",
    placeholder,
    required = false,
}) => {
    const { values, errors, touched, handleChange, handleBlur } =
        useFormContext();

    const hasError = touched[name] && errors[name];

    return (
        <div className="flex gap-2">
            {label && (
                <label htmlFor={name} className="form-label">
                    {label}
                    {required && <span className="required">*</span>}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={values[name] || ""}
                onChange={(e) => handleChange(name, e.target.value)}
                onBlur={() => handleBlur(name)}
                placeholder={placeholder}
                className="border rounded p-1"
                style={{borderColor: hasError ? 'red': 'white'}}

            />
            {hasError && <span className="text-red-500 mt-0.5">{errors[name]}</span>}
        </div>
    );
};
