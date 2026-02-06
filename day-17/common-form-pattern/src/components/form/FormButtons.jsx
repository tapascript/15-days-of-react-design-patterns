import { useFormContext } from "./FormContext";

/**
 * FormButtons component - handles form action buttons
 */
export const FormButtons = ({
    submitText = "Submit",
    showReset = true,
    resetText = "Reset",
    onCancel,
    cancelText = "Cancel",
    className = "",
}) => {
    const { isSubmitting, resetForm } = useFormContext();

    return (
        <div className={`form-buttons ${className}`}>
            <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : submitText}
            </button>

            {showReset && (
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetForm}
                    disabled={isSubmitting}
                >
                    {resetText}
                </button>
            )}

            {onCancel && (
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onCancel}
                    disabled={isSubmitting}
                >
                    {cancelText}
                </button>
            )}
        </div>
    );
};
