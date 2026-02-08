import { useCallback, useState } from "react";

export const useForm = (initialValues = {}, onSubmit, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = useCallback(
        (name, value) => {
            setValues((prev) => ({
                ...prev,
                [name]: value,
            }));

            // Clear error when user starts typing
            if (errors[name]) {
                setErrors((prev) => ({
                    ...prev,
                    [name]: undefined,
                }));
            }
        },
        [errors],
    );

    // Handle blur events
    const handleBlur = useCallback(
        (name) => {
            setTouched((prev) => ({
                ...prev,
                [name]: true,
            }));

            // Validate on blur if validator exists
            if (validate) {
                const fieldErrors = validate({ ...values });
                if (fieldErrors[name]) {
                    setErrors((prev) => ({
                        ...prev,
                        [name]: fieldErrors[name],
                    }));
                }
            }
        },
        [values, validate],
    );

    // Handle form submission
    const handleSubmit = useCallback(
        async (e) => {
            if (e) e.preventDefault();

            // Validate all fields
            if (validate) {
                const validationErrors = validate(values);
                setErrors(validationErrors);

                if (Object.keys(validationErrors).length > 0) {
                    // Mark all fields as touched
                    const allTouched = Object.keys(values).reduce(
                        (acc, key) => {
                            acc[key] = true;
                            return acc;
                        },
                        {},
                    );
                    setTouched(allTouched);
                    return;
                }
            }

            setIsSubmitting(true);
            try {
                await onSubmit(values);
            } catch (error) {
                console.error("Form submission error:", error);
            } finally {
                setIsSubmitting(false);
            }
        },
        [values, validate, onSubmit],
    );

    // Reset form to initial values
    const resetForm = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
    }, [initialValues]);

    // Set form values programmatically
    const setFormValues = useCallback((newValues) => {
        setValues(newValues);
    }, []);

    // Set a single field value
    const setFieldValue = useCallback(
        (name, value) => {
            handleChange(name, value);
        },
        [handleChange],
    );

    // Set field error
    const setFieldError = useCallback((name, error) => {
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    }, []);

    return {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        setFormValues,
        setFieldValue,
        setFieldError,
    };
};
