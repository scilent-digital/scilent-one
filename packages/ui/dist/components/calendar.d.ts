/**
 * @fileoverview Calendar component for date selection
 *
 * This component provides a calendar interface for date selection.
 */
import * as React from "react";
/**
 * Calendar component props interface
 */
interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Whether to show the navigation buttons
     */
    showNavigation?: boolean;
}
/**
 * Calendar component - Simplified placeholder
 */
declare function Calendar({ className, showNavigation, ...props }: CalendarProps): import("react/jsx-runtime").JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
export { Calendar };
//# sourceMappingURL=calendar.d.ts.map