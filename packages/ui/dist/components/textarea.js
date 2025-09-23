import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @fileoverview Textarea component for multi-line text input
 *
 * This component provides a multi-line text input with proper styling.
 */
import * as React from "react";
import { cn } from "@/lib/utils";
/**
 * Textarea component
 */
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
    return (_jsx("textarea", { className: cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className), ref: ref, ...props }));
});
Textarea.displayName = "Textarea";
export { Textarea };
//# sourceMappingURL=textarea.js.map