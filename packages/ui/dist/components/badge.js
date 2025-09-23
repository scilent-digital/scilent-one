import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @fileoverview Badge component for status indicators and labels
 *
 * This component provides a small badge that can be used to indicate
 * status, categories, or other metadata. Supports different variants
 * and can be customized with custom colors.
 */
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
/**
 * Badge variant styles using class-variance-authority
 */
const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground",
            success: "border-transparent bg-green-500 text-white hover:bg-green-600",
            warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
            info: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
/**
 * Badge component
 */
function Badge({ className, variant, ...props }) {
    return (_jsx("div", { className: cn(badgeVariants({ variant }), className), ...props }));
}
export { Badge, badgeVariants };
//# sourceMappingURL=badge.js.map