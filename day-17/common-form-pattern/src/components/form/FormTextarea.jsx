import { useFormContext } from "./FormContext";

/**
 * FormTextarea component - handles textarea fields
 */
export const FormTextarea = ({
    name,
    label,
    placeholder,
    rows = 4,
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
            <textarea
                id={name}
                name={name}
                value={values[name] || ""}
                onChange={(e) => handleChange(name, e.target.value)}
                onBlur={() => handleBlur(name)}
                placeholder={placeholder}
                rows={rows}
                className="border rounded p-1"
                style={{ borderColor: hasError ? "red" : "white" }}
            />
            {hasError && (
                <span className="text-red-500 mt-0.5">{errors[name]}</span>
            )}
        </div>
    );
};
