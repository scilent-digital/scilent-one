/**
 * @fileoverview Input component with label and error state support
 *
 * This component provides a styled input element with support for labels,
 * error states, and proper accessibility attributes.
 */
import * as React from "react";
/**
 * Input component props interface
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Error state for the input
     */
    error?: boolean;
    /**
     * Start adornment element (e.g., icon)
     */
    startAdornment?: React.ReactNode;
    /**
     * End adornment element (e.g., icon)
     */
    endAdornment?: React.ReactNode;
}
/**
 * Input component
 */
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
//# sourceMappingURL=input.d.ts.map