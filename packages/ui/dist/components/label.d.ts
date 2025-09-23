/**
 * @fileoverview Label component for form inputs
 *
 * This component provides accessible labels for form inputs.
 */
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps } from "class-variance-authority";
/**
 * Label variant styles
 */
declare const labelVariants: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
/**
 * Label component props interface
 */
interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root>, VariantProps<typeof labelVariants> {
}
/**
 * Label component
 */
declare const Label: React.ForwardRefExoticComponent<Omit<LabelProps, "ref"> & React.RefAttributes<HTMLLabelElement>>;
export { Label };
//# sourceMappingURL=label.d.ts.map