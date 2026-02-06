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
    className = "",
}) => {
    const { values, errors, touched, handleChange, handleBlur } =
        useFormContext();

    const hasError = touched[name] && errors[name];

    return (
        <div className={`form-field ${className}`}>
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
                className={`form-input ${hasError ? "error" : ""}`}
            />
            {hasError && <span className="error-message">{errors[name]}</span>}
        </div>
    );
};
