import { Form as FormRoot } from "./Form";
import { FormButtons } from "./FormButtons";
import { FormField } from "./FormField";
import { FormSelect } from "./FormSelect";
import { FormTextarea } from "./FormTextarea";

// Compound component pattern - attach sub-components to main Form
export const Form = Object.assign(FormRoot, {
    Field: FormField,
    Textarea: FormTextarea,
    Select: FormSelect,
    Buttons: FormButtons,
});

// Also export individually if needed
export { FormButtons, FormField, FormSelect, FormTextarea };
