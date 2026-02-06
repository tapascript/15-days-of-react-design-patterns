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
            <textarea
                id={name}
                name={name}
                value={values[name] || ""}
                onChange={(e) => handleChange(name, e.target.value)}
                onBlur={() => handleBlur(name)}
                placeholder={placeholder}
                rows={rows}
                className={`form-textarea ${hasError ? "error" : ""}`}
            />
            {hasError && <span className="error-message">{errors[name]}</span>}
        </div>
    );
};
