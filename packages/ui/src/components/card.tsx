/**
 * @fileoverview Card components for content layout
 *
 * This module provides a set of card components that can be used to
 * create structured content layouts with headers, footers, and content areas.
 */

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Card component props interface
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CardHeader component props interface
 */
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CardTitle component props interface
 */
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * CardDescription component props interface
 */
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * CardContent component props interface
 */
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CardFooter component props interface
 */
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Card component - Main container
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

/**
 * CardHeader component - Header section
 */
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

/**
 * CardTitle component - Title text
 */
const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

/**
 * CardDescription component - Description text
 */
const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

/**
 * CardContent component - Main content area
 */
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

/**
 * CardFooter component - Footer section
 */
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}