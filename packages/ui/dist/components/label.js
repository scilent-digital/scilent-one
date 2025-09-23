import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @fileoverview Label component for form inputs
 *
 * This component provides accessible labels for form inputs.
 */
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
/**
 * Label variant styles
 */
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
/**
 * Label component
 */
const Label = React.forwardRef(({ className, ...props }, ref) => (_jsx(LabelPrimitive.Root, { ref: ref, className: cn(labelVariants(), className), ...props })));
Label.displayName = LabelPrimitive.Root.displayName;
export { Label };
//# sourceMappingURL=label.js.map