/**
 * @fileoverview Input component with label and error state support
 *
 * This component provides a styled input element with support for labels,
 * error states, and proper accessibility attributes.
 */

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Input component props interface
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Error state for the input
   */
  error?: boolean
  /**
   * Start adornment element (e.g., icon)
   */
  startAdornment?: React.ReactNode
  /**
   * End adornment element (e.g., icon)
   */
  endAdornment?: React.ReactNode
}

/**
 * Input component
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, startAdornment, endAdornment, ...props }, ref) => {
    return (
      <div className="relative">
        {startAdornment && (
          <div className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground">
            {startAdornment}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus-visible:ring-destructive",
            startAdornment && "pl-10",
            endAdornment && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {endAdornment && (
          <div className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground">
            {endAdornment}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }