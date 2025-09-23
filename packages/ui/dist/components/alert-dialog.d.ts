/**
 * @fileoverview Alert Dialog component for confirmations
 *
 * This component provides a modal dialog for confirmations and alerts.
 * Built with simple React components.
 */
import * as React from "react";
/**
 * AlertDialog component props interface
 */
interface AlertDialogProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
/**
 * AlertDialogTrigger component props interface
 */
interface AlertDialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
/**
 * AlertDialogContent component props interface
 */
interface AlertDialogContentProps {
    children: React.ReactNode;
    className?: string;
}
/**
 * AlertDialogHeader component props interface
 */
interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * AlertDialogFooter component props interface
 */
interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * AlertDialogTitle component props interface
 */
interface AlertDialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
/**
 * AlertDialogDescription component props interface
 */
interface AlertDialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
/**
 * AlertDialogAction component props interface
 */
interface AlertDialogActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
/**
 * AlertDialogCancel component props interface
 */
interface AlertDialogCancelProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
/**
 * AlertDialog component - Main container
 */
declare const AlertDialog: React.FC<AlertDialogProps>;
/**
 * AlertDialogTrigger component - Button to open alert dialog
 */
declare const AlertDialogTrigger: React.FC<AlertDialogTriggerProps>;
/**
 * AlertDialogContent component - Main alert dialog content
 */
declare const AlertDialogContent: React.FC<AlertDialogContentProps>;
/**
 * AlertDialogHeader component - Header section
 */
declare const AlertDialogHeader: React.FC<AlertDialogHeaderProps>;
/**
 * AlertDialogFooter component - Footer section
 */
declare const AlertDialogFooter: React.FC<AlertDialogFooterProps>;
/**
 * AlertDialogTitle component - Alert dialog title
 */
declare const AlertDialogTitle: React.FC<AlertDialogTitleProps>;
/**
 * AlertDialogDescription component - Alert dialog description
 */
declare const AlertDialogDescription: React.FC<AlertDialogDescriptionProps>;
/**
 * AlertDialogAction component - Action button
 */
declare const AlertDialogAction: React.FC<AlertDialogActionProps>;
/**
 * AlertDialogCancel component - Cancel button
 */
declare const AlertDialogCancel: React.FC<AlertDialogCancelProps>;
export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel, };
//# sourceMappingURL=alert-dialog.d.ts.map