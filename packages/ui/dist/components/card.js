import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @fileoverview Card components for content layout
 *
 * This module provides a set of card components that can be used to
 * create structured content layouts with headers, footers, and content areas.
 */
import * as React from "react";
import { cn } from "@/lib/utils";
/**
 * Card component - Main container
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props })));
Card.displayName = "Card";
/**
 * CardHeader component - Header section
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })));
CardHeader.displayName = "CardHeader";
/**
 * CardTitle component - Title text
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx("h3", { ref: ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })));
CardTitle.displayName = "CardTitle";
/**
 * CardDescription component - Description text
 */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (_jsx("p", { ref: ref, className: cn("text-sm text-muted-foreground", className), ...props })));
CardDescription.displayName = "CardDescription";
/**
 * CardContent component - Main content area
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("p-6 pt-0", className), ...props })));
CardContent.displayName = "CardContent";
/**
 * CardFooter component - Footer section
 */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("flex items-center p-6 pt-0", className), ...props })));
CardFooter.displayName = "CardFooter";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, };
//# sourceMappingURL=card.js.map