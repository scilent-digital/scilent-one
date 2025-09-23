import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @fileoverview Separator component for visual division
 *
 * This component provides a visual separator that can be used to
 * divide content sections. Supports both horizontal and vertical orientations.
 */
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";
/**
 * Separator component
 */
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (_jsx(SeparatorPrimitive.Root, { ref: ref, decorative: decorative, orientation: orientation, className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props })));
Separator.displayName = SeparatorPrimitive.Root.displayName;
export { Separator };
//# sourceMappingURL=separator.js.map