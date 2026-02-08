import { useFormContext } from "./FormContext";

/**
 * FormSelect component - handles select dropdowns
 */
export const FormSelect = ({
    name,
    label,
    options = [],
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
            <select
                id={name}
                name={name}
                value={values[name] || ""}
                onChange={(e) => handleChange(name, e.target.value)}
                onBlur={() => handleBlur(name)}
                 className="border rounded p-1"
                style={{borderColor: hasError ? 'red': 'white'}}
            >
                <option value="">Select...</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {hasError && <span className="text-red-500 mt-0.5">{errors[name]}</span>}
        </div>
    );
};
