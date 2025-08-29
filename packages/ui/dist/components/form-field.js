import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
const FormField = React.forwardRef(({ label, description, error, required, className, children, htmlFor }, ref) => {
    const id = React.useId();
    const fieldId = htmlFor || id;
    return (_jsxs("div", { ref: ref, className: cn("space-y-2", className), children: [label && (_jsxs(Label, { htmlFor: fieldId, className: "text-sm font-medium", children: [label, required && _jsx("span", { className: "text-destructive ml-1", children: "*" })] })), _jsxs("div", { className: "space-y-1", children: [React.isValidElement(children) &&
                        React.cloneElement(children, {
                            id: fieldId,
                            "aria-describedby": description || error ? `${fieldId}-description` : undefined,
                            "aria-invalid": error ? "true" : undefined,
                        }), description && !error && (_jsx("p", { id: `${fieldId}-description`, className: "text-sm text-muted-foreground", children: description })), error && (_jsx("p", { id: `${fieldId}-description`, className: "text-sm text-destructive", children: error }))] })] }));
});
FormField.displayName = "FormField";
export { FormField };
//# sourceMappingURL=form-field.js.map