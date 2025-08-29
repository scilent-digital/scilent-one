import * as React from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface DrawerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  direction?: "left" | "right" | "top" | "bottom"
  size?: "sm" | "md" | "lg" | "xl" | "full"
  children: React.ReactNode
  className?: string
}

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open = false,
      onOpenChange,
      direction = "right",
      size = "md",
      children,
      className,
    },
    ref
  ) => {
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onOpenChange?.(false)
        }
      }

      if (open) {
        document.addEventListener("keydown", handleEscape)
        document.body.style.overflow = "hidden"
      }

      return () => {
        document.removeEventListener("keydown", handleEscape)
        document.body.style.overflow = "unset"
      }
    }, [open, onOpenChange])

    if (!open) return null

    const sizeClasses = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      full: "max-w-full",
    }

    const directionClasses = {
      left: "left-0 top-0 h-full",
      right: "right-0 top-0 h-full",
      top: "top-0 left-0 w-full",
      bottom: "bottom-0 left-0 w-full",
    }

    const animationClasses = {
      left: "data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
      right: "data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
      top: "data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
      bottom: "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
    }

    return (
      <>
        {/* Overlay */}
        <div
          className="fixed inset-0 z-50 bg-black/80"
          onClick={() => onOpenChange?.(false)}
        />
        
        {/* Drawer */}
        <div
          ref={ref}
          className={cn(
            "fixed z-50 bg-background shadow-lg",
            directionClasses[direction],
            (direction === "left" || direction === "right") && sizeClasses[size],
            (direction === "top" || direction === "bottom") && "h-auto",
            animationClasses[direction],
            "animate-in fade-in-0 duration-300",
            className
          )}
          data-state={open ? "open" : "closed"}
        >
          {children}
        </div>
      </>
    )
  }
)
Drawer.displayName = "Drawer"

const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    onClose?: () => void
  }
>(({ className, children, onClose, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between border-b p-4",
      className
    )}
    {...props}
  >
    <div className="flex-1">{children}</div>
    {onClose && (
      <Button variant="ghost" size="icon" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    )}
  </div>
))
DrawerHeader.displayName = "DrawerHeader"

const DrawerContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-auto p-4", className)}
    {...props}
  />
))
DrawerContent.displayName = "DrawerContent"

const DrawerFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-end gap-2 border-t p-4",
      className
    )}
    {...props}
  />
))
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
DrawerTitle.displayName = "DrawerTitle"

const DrawerDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = "DrawerDescription"

export {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}