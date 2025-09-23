import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * @fileoverview Dialog component for modal overlays
 *
 * This component provides a modal dialog with overlay, content area,
 * and various sub-components for headers, footers, etc.
 */
import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
/**
 * Dialog component - Main container
 */
const Dialog = ({ children, open, onOpenChange }) => {
    if (!open)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [_jsx("div", { className: "fixed inset-0 bg-background/80 backdrop-blur-sm", onClick: () => onOpenChange?.(false) }), children] }));
};
/**
 * DialogTrigger component - Button to open dialog
 */
const DialogTrigger = ({ children, onClick, ...props }) => {
    return (_jsx("button", { onClick: onClick, ...props, children: children }));
};
/**
 * DialogContent component - Main dialog content
 */
const DialogContent = ({ children, className }) => {
    return (_jsx("div", { className: cn("relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg", className), children: children }));
};
/**
 * DialogHeader component - Header section
 */
const DialogHeader = ({ className, ...props }) => (_jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }));
/**
 * DialogFooter component - Footer section
 */
const DialogFooter = ({ className, ...props }) => (_jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
/**
 * DialogTitle component - Dialog title
 */
const DialogTitle = ({ className, ...props }) => (_jsx("h3", { className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props }));
/**
 * DialogDescription component - Dialog description
 */
const DialogDescription = ({ className, ...props }) => (_jsx("p", { className: cn("text-sm text-muted-foreground", className), ...props }));
export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, };
//# sourceMappingURL=dialog.js.map