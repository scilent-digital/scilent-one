/**
 * @fileoverview Separator component for visual division
 *
 * This component provides a visual separator that can be used to
 * divide content sections. Supports both horizontal and vertical orientations.
 */
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
/**
 * Separator component props interface
 */
interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
    /**
     * Orientation of the separator
     */
    orientation?: "horizontal" | "vertical";
    /**
     * Whether to use decorative styling
     */
    decorative?: boolean;
}
/**
 * Separator component
 */
declare const Separator: React.ForwardRefExoticComponent<Omit<SeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Separator };
//# sourceMappingURL=separator.d.ts.map