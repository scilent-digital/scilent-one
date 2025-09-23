/**
 * @fileoverview Dialog component for modal overlays
 *
 * This component provides a modal dialog with overlay, content area,
 * and various sub-components for headers, footers, etc.
 */

import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Dialog component props interface
 */
interface DialogProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * DialogTrigger component props interface
 */
interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

/**
 * DialogContent component props interface
 */
interface DialogContentProps {
  children: React.ReactNode
  className?: string
}

/**
 * DialogHeader component props interface
 */
interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DialogFooter component props interface
 */
interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * DialogTitle component props interface
 */
interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * DialogDescription component props interface
 */
interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * Dialog component - Main container
 */
const Dialog: React.FC<DialogProps> = ({ children, open, onOpenChange }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => onOpenChange?.(false)}
      />
      {children}
    </div>
  )
}

/**
 * DialogTrigger component - Button to open dialog
 */
const DialogTrigger: React.FC<DialogTriggerProps> = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}

/**
 * DialogContent component - Main dialog content
 */
const DialogContent: React.FC<DialogContentProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg",
      className
    )}>
      {children}
    </div>
  )
}

/**
 * DialogHeader component - Header section
 */
const DialogHeader: React.FC<DialogHeaderProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)

/**
 * DialogFooter component - Footer section
 */
const DialogFooter: React.FC<DialogFooterProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)

/**
 * DialogTitle component - Dialog title
 */
const DialogTitle: React.FC<DialogTitleProps> = ({
  className,
  ...props
}) => (
  <h3
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
)

/**
 * DialogDescription component - Dialog description
 */
const DialogDescription: React.FC<DialogDescriptionProps> = ({
  className,
  ...props
}) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
)

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}