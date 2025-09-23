/**
 * @fileoverview Separator component for visual division
 *
 * This component provides a visual separator that can be used to
 * divide content sections. Supports both horizontal and vertical orientations.
 */

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

/**
 * Separator component props interface
 */
interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  /**
   * Orientation of the separator
   */
  orientation?: "horizontal" | "vertical"
  /**
   * Whether to use decorative styling
   */
  decorative?: boolean
}

/**
 * Separator component
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      ...props
    },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }