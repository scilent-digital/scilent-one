/**
 * @fileoverview Button component with multiple variants and sizes
 *
 * This component provides a flexible button implementation with support for
 * different variants (default, destructive, outline, secondary, ghost, link),
 * sizes (default, sm, lg, icon), and states (loading, disabled).
 */
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
/**
 * Button variant styles using class-variance-authority
 */
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
/**
 * Button component props interface
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    /**
     * If true, the button will be rendered as a child of Slot
     */
    asChild?: boolean;
    /**
     * If true, shows a loading spinner and disables the button
     */
    loading?: boolean;
}
/**
 * Button component
 */
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map