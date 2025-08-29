import * as React from "react";
export interface FormFieldProps {
    label?: string;
    description?: string;
    error?: string;
    required?: boolean;
    className?: string;
    children: React.ReactNode;
    htmlFor?: string;
}
declare const FormField: React.ForwardRefExoticComponent<FormFieldProps & React.RefAttributes<HTMLDivElement>>;
export { FormField };
//# sourceMappingURL=form-field.d.ts.map