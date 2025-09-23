import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * @fileoverview Button component with multiple variants and sizes
 *
 * This component provides a flexible button implementation with support for
 * different variants (default, destructive, outline, secondary, ghost, link),
 * sizes (default, sm, lg, icon), and states (loading, disabled).
 */
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
/**
 * Button variant styles using class-variance-authority
 */
const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
/**
 * Loading spinner component
 */
const ButtonSpinner = () => (_jsxs("svg", { className: "mr-2 h-4 w-4 animate-spin", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }));
/**
 * Button component
 */
const Button = React.forwardRef(({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            className: cn(buttonVariants({ variant, size, className }), children.props?.className),
            disabled: loading || props.disabled,
            ...props
        });
    }
    return (_jsxs("button", { className: cn(buttonVariants({ variant, size, className })), ref: ref, disabled: loading || props.disabled, ...props, children: [loading && _jsx(ButtonSpinner, {}), children] }));
});
Button.displayName = "Button";
export { Button, buttonVariants };
//# sourceMappingURL=button.js.map