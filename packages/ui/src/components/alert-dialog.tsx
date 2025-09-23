/**
 * @fileoverview Alert Dialog component for confirmations
 *
 * This component provides a modal dialog for confirmations and alerts.
 * Built with simple React components.
 */

import * as React from "react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"

/**
 * AlertDialog component props interface
 */
interface AlertDialogProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * AlertDialogTrigger component props interface
 */
interface AlertDialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

/**
 * AlertDialogContent component props interface
 */
interface AlertDialogContentProps {
  children: React.ReactNode
  className?: string
}

/**
 * AlertDialogHeader component props interface
 */
interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * AlertDialogFooter component props interface
 */
interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * AlertDialogTitle component props interface
 */
interface AlertDialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * AlertDialogDescription component props interface
 */
interface AlertDialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * AlertDialogAction component props interface
 */
interface AlertDialogActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

/**
 * AlertDialogCancel component props interface
 */
interface AlertDialogCancelProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

/**
 * AlertDialog component - Main container
 */
const AlertDialog: React.FC<AlertDialogProps> = ({ children, open, onOpenChange }) => {
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
 * AlertDialogTrigger component - Button to open alert dialog
 */
const AlertDialogTrigger: React.FC<AlertDialogTriggerProps> = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}

/**
 * AlertDialogContent component - Main alert dialog content
 */
const AlertDialogContent: React.FC<AlertDialogContentProps> = ({ children, className }) => {
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
 * AlertDialogHeader component - Header section
 */
const AlertDialogHeader: React.FC<AlertDialogHeaderProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)

/**
 * AlertDialogFooter component - Footer section
 */
const AlertDialogFooter: React.FC<AlertDialogFooterProps> = ({
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
 * AlertDialogTitle component - Alert dialog title
 */
const AlertDialogTitle: React.FC<AlertDialogTitleProps> = ({
  className,
  ...props
}) => (
  <h3
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
)

/**
 * AlertDialogDescription component - Alert dialog description
 */
const AlertDialogDescription: React.FC<AlertDialogDescriptionProps> = ({
  className,
  ...props
}) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
)

/**
 * AlertDialogAction component - Action button
 */
const AlertDialogAction: React.FC<AlertDialogActionProps> = ({
  className,
  children,
  ...props
}) => (
  <button
    className={cn(buttonVariants(), className)}
    {...props}
  >
    {children}
  </button>
)

/**
 * AlertDialogCancel component - Cancel button
 */
const AlertDialogCancel: React.FC<AlertDialogCancelProps> = ({
  className,
  children,
  ...props
}) => (
  <button
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  >
    {children}
  </button>
)

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}