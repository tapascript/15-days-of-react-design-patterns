const defaultFormReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_FIELD": {
            const { name, value } = action.payload;
            const errors = { ...state.errors };

            // Simple inline validation rules
            if (name === "email" && !value.includes("@")) {
                errors.email = "Invalid email address";
            } else {
                delete errors[name];
            }

            return {
                ...state,
                values: { ...state.values, [name]: value },
                errors,
            };
        }

        case "RESET_FORM":
            return { values: {}, errors: {} };

        default:
            return state;
    }
};

const customFormReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_FIELD": {
            const { name, value } = action.payload;
            const base = {
                ...state,
                values: { ...state.values, [name]: value },
                errors: { ...state.errors },
            };

            // Custom logic: restrict name to letters only
            if (name === "name" && /\d/.test(value)) {
                base.errors.name = "Name cannot contain numbers";
            } else if (name === "email" && !value.endsWith(".com")) {
                base.errors.email = "Email must end with .com";
            } else {
                delete base.errors[name];
            }

            return base;
        }

        default:
            return state;
    }
};

export { customFormReducer, defaultFormReducer };
