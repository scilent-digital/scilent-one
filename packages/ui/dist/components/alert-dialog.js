import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * @fileoverview Alert Dialog component for confirmations
 *
 * This component provides a modal dialog for confirmations and alerts.
 * Built with simple React components.
 */
import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
/**
 * AlertDialog component - Main container
 */
const AlertDialog = ({ children, open, onOpenChange }) => {
    if (!open)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [_jsx("div", { className: "fixed inset-0 bg-background/80 backdrop-blur-sm", onClick: () => onOpenChange?.(false) }), children] }));
};
/**
 * AlertDialogTrigger component - Button to open alert dialog
 */
const AlertDialogTrigger = ({ children, onClick, ...props }) => {
    return (_jsx("button", { onClick: onClick, ...props, children: children }));
};
/**
 * AlertDialogContent component - Main alert dialog content
 */
const AlertDialogContent = ({ children, className }) => {
    return (_jsx("div", { className: cn("relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg", className), children: children }));
};
/**
 * AlertDialogHeader component - Header section
 */
const AlertDialogHeader = ({ className, ...props }) => (_jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props }));
/**
 * AlertDialogFooter component - Footer section
 */
const AlertDialogFooter = ({ className, ...props }) => (_jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
/**
 * AlertDialogTitle component - Alert dialog title
 */
const AlertDialogTitle = ({ className, ...props }) => (_jsx("h3", { className: cn("text-lg font-semibold", className), ...props }));
/**
 * AlertDialogDescription component - Alert dialog description
 */
const AlertDialogDescription = ({ className, ...props }) => (_jsx("p", { className: cn("text-sm text-muted-foreground", className), ...props }));
/**
 * AlertDialogAction component - Action button
 */
const AlertDialogAction = ({ className, children, ...props }) => (_jsx("button", { className: cn(buttonVariants(), className), ...props, children: children }));
/**
 * AlertDialogCancel component - Cancel button
 */
const AlertDialogCancel = ({ className, children, ...props }) => (_jsx("button", { className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className), ...props, children: children }));
export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, };
//# sourceMappingURL=alert-dialog.js.map