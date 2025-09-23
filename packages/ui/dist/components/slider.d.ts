/**
 * @fileoverview Slider component for range inputs
 *
 * This component provides a slider for selecting numeric values.
 */
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
/**
 * Slider component props interface
 */
interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
    /**
     * Default value for the slider
     */
    defaultValue?: number[];
    /**
     * Current value for the slider
     */
    value?: number[];
    /**
     * Callback when slider value changes
     */
    onValueChange?: (value: number[]) => void;
}
/**
 * Slider component
 */
declare const Slider: React.ForwardRefExoticComponent<Omit<SliderProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export { Slider };
//# sourceMappingURL=slider.d.ts.map