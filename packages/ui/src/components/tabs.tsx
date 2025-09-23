/**
 * @fileoverview Tabs component for content organization
 *
 * This component provides a tabs interface for organizing content into
 * different sections. Built on top of Radix UI tabs primitive.
 */

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Tabs component props interface
 */
interface TabsProps {
  children: React.ReactNode
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

/**
 * TabsList component props interface
 */
interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

/**
 * TabsTrigger component props interface
 */
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  value: string
}

/**
 * TabsContent component props interface
 */
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  value: string
}

/**
 * Tabs component - Main container
 */
const Tabs: React.FC<TabsProps> = ({ children, defaultValue, value, onValueChange }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue || '')

  const currentValue = value || activeTab

  const handleValueChange = (newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue)
    } else {
      setActiveTab(newValue)
    }
  }

  return (
    <div data-state={currentValue} data-orientation="horizontal">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            activeValue: currentValue,
            onValueChange: handleValueChange
          })
        }
        return child
      })}
    </div>
  )
}

/**
 * TabsList component - Container for tab triggers
 */
const TabsList: React.FC<TabsListProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * TabsTrigger component - Individual tab button
 */
const TabsTrigger: React.FC<TabsTriggerProps> = ({
  className,
  children,
  value,
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      onClick={(e) => {
        onClick?.(e)
        // This will be handled by the parent context
      }}
      data-state={value}
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * TabsContent component - Content area for each tab
 */
const TabsContent: React.FC<TabsContentProps> = ({
  className,
  children,
  value,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      data-state={value}
      {...props}
    >
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }