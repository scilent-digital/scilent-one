import * as React from "react"

import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export interface FormFieldProps {
  label?: string
  description?: string
  error?: string
  required?: boolean
  className?: string
  children: React.ReactNode
  htmlFor?: string
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, description, error, required, className, children, htmlFor }, ref) => {
    const id = React.useId()
    const fieldId = htmlFor || id

    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        {label && (
          <Label htmlFor={fieldId} className="text-sm font-medium">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
        )}
        <div className="space-y-1">
          {React.isValidElement(children) && 
            React.cloneElement(children, {
              id: fieldId,
              "aria-describedby": description || error ? `${fieldId}-description` : undefined,
              "aria-invalid": error ? "true" : undefined,
            } as any)}
          {description && !error && (
            <p
              id={`${fieldId}-description`}
              className="text-sm text-muted-foreground"
            >
              {description}
            </p>
          )}
          {error && (
            <p
              id={`${fieldId}-description`}
              className="text-sm text-destructive"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    )
  }
)
FormField.displayName = "FormField"

export { FormField }