import { useFormContext } from "./FormContext";

/**
 * FormSelect component - handles select dropdowns
 */
export const FormSelect = ({
    name,
    label,
    options = [],
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
            <select
                id={name}
                name={name}
                value={values[name] || ""}
                onChange={(e) => handleChange(name, e.target.value)}
                onBlur={() => handleBlur(name)}
                className={`form-select ${hasError ? "error" : ""}`}
            >
                <option value="">Select...</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {hasError && <span className="error-message">{errors[name]}</span>}
        </div>
    );
};
