/**
 * @fileoverview Progress component for progress bars
 *
 * This component provides a progress bar for showing completion status.
 */
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
/**
 * Progress component props interface
 */
interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
    /**
     * Progress value from 0 to 100
     */
    value?: number;
}
/**
 * Progress component
 */
declare const Progress: React.ForwardRefExoticComponent<Omit<ProgressProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Progress };
//# sourceMappingURL=progress.d.ts.map