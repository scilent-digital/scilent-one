import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @fileoverview Calendar component for date selection
 *
 * This component provides a calendar interface for date selection.
 */
import * as React from "react";
import { cn } from "@/lib/utils";
/**
 * Calendar component - Simplified placeholder
 */
function Calendar({ className, showNavigation = true, ...props }) {
    return (_jsx("div", { className: cn("p-4 border rounded-md bg-background", className), ...props, children: _jsx("div", { className: "text-center text-muted-foreground", children: "Calendar Component (Placeholder)" }) }));
}
Calendar.displayName = "Calendar";
export { Calendar };
//# sourceMappingURL=calendar.js.map