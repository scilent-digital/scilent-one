/**
 * @fileoverview Select component for dropdown selection
 *
 * This component provides a dropdown select interface.
 */
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
/**
 * SelectTrigger component props interface
 */
interface SelectTriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
}
/**
 * SelectContent component props interface
 */
interface SelectContentProps extends React.ComponentProps<typeof SelectPrimitive.Content> {
}
/**
 * SelectItem component props interface
 */
interface SelectItemProps extends React.ComponentProps<typeof SelectPrimitive.Item> {
}
/**
 * SelectLabel component props interface
 */
interface SelectLabelProps extends React.ComponentProps<typeof SelectPrimitive.Label> {
}
/**
 * SelectSeparator component props interface
 */
interface SelectSeparatorProps extends React.ComponentProps<typeof SelectPrimitive.Separator> {
}
/**
 * SelectScrollUpButton component props interface
 */
interface SelectScrollUpButtonProps extends React.ComponentProps<typeof SelectPrimitive.ScrollUpButton> {
}
/**
 * SelectScrollDownButton component props interface
 */
interface SelectScrollDownButtonProps extends React.ComponentProps<typeof SelectPrimitive.ScrollDownButton> {
}
/**
 * Select component - Main container
 */
declare const Select: React.FC<SelectPrimitive.SelectProps>;
/**
 * SelectGroup component - Group container
 */
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
/**
 * SelectValue component - Display value
 */
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
/**
 * SelectTrigger component - Button to open select
 */
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectTriggerProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
/**
 * SelectScrollUpButton component - Scroll up button
 */
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<Omit<SelectScrollUpButtonProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * SelectScrollDownButton component - Scroll down button
 */
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<Omit<SelectScrollDownButtonProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * SelectContent component - Dropdown content
 */
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * SelectLabel component - Label for grouped items
 */
declare const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectLabelProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * SelectItem component - Individual selectable item
 */
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectItemProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * SelectSeparator component - Visual separator
 */
declare const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectSeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton, };
//# sourceMappingURL=select.d.ts.map