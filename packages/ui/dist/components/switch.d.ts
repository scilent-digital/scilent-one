/**
 * @fileoverview Switch component for toggles
 *
 * This component provides a toggle switch input for boolean values.
 * Built on top of Radix UI switch primitive.
 */
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
/**
 * Switch component props interface
 */
interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitives.Root> {
    /**
     * Whether the switch is checked
     */
    checked?: boolean;
    /**
     * Callback when switch state changes
     */
    onCheckedChange?: (checked: boolean) => void;
}
/**
 * Switch component
 */
declare const Switch: React.ForwardRefExoticComponent<Omit<SwitchProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { Switch };
//# sourceMappingURL=switch.d.ts.map