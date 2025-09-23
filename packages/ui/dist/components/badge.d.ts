/**
 * @fileoverview Badge component for status indicators and labels
 *
 * This component provides a small badge that can be used to indicate
 * status, categories, or other metadata. Supports different variants
 * and can be customized with custom colors.
 */
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
/**
 * Badge variant styles using class-variance-authority
 */
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | "warning" | "info" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
/**
 * Badge component props interface
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
/**
 * Badge component
 */
declare function Badge({ className, variant, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
//# sourceMappingURL=badge.d.ts.map