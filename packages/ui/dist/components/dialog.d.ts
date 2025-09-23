/**
 * @fileoverview Dialog component for modal overlays
 *
 * This component provides a modal dialog with overlay, content area,
 * and various sub-components for headers, footers, etc.
 */
import * as React from "react";
/**
 * Dialog component props interface
 */
interface DialogProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
/**
 * DialogTrigger component props interface
 */
interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
/**
 * DialogContent component props interface
 */
interface DialogContentProps {
    children: React.ReactNode;
    className?: string;
}
/**
 * DialogHeader component props interface
 */
interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * DialogFooter component props interface
 */
interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * DialogTitle component props interface
 */
interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
/**
 * DialogDescription component props interface
 */
interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
/**
 * Dialog component - Main container
 */
declare const Dialog: React.FC<DialogProps>;
/**
 * DialogTrigger component - Button to open dialog
 */
declare const DialogTrigger: React.FC<DialogTriggerProps>;
/**
 * DialogContent component - Main dialog content
 */
declare const DialogContent: React.FC<DialogContentProps>;
/**
 * DialogHeader component - Header section
 */
declare const DialogHeader: React.FC<DialogHeaderProps>;
/**
 * DialogFooter component - Footer section
 */
declare const DialogFooter: React.FC<DialogFooterProps>;
/**
 * DialogTitle component - Dialog title
 */
declare const DialogTitle: React.FC<DialogTitleProps>;
/**
 * DialogDescription component - Dialog description
 */
declare const DialogDescription: React.FC<DialogDescriptionProps>;
export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, };
//# sourceMappingURL=dialog.d.ts.map