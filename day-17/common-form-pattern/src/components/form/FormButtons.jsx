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
}) => {
    const { isSubmitting, resetForm } = useFormContext();

    return (
        <div className="flex gap-1.5">
            <button
                type="submit"
                className="bg-green-600 p-1 rounded cursor-pointer"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : submitText}
            </button>

            {showReset && (
                <button
                    type="button"
                    className="bg-gray-200 text-black p-1 rounded cursor-pointer"
                    onClick={resetForm}
                    disabled={isSubmitting}
                >
                    {resetText}
                </button>
            )}

            {onCancel && (
                <button
                    type="button"
                    className="bg-red-500 p-1 rounded cursor-pointer"
                    onClick={onCancel}
                    disabled={isSubmitting}
                >
                    {cancelText}
                </button>
            )}
        </div>
    );
};
