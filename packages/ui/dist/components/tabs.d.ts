/**
 * @fileoverview Tabs component for content organization
 *
 * This component provides a tabs interface for organizing content into
 * different sections. Built on top of Radix UI tabs primitive.
 */
import * as React from "react";
/**
 * Tabs component props interface
 */
interface TabsProps {
    children: React.ReactNode;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}
/**
 * TabsList component props interface
 */
interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
/**
 * TabsTrigger component props interface
 */
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    value: string;
}
/**
 * TabsContent component props interface
 */
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    value: string;
}
/**
 * Tabs component - Main container
 */
declare const Tabs: React.FC<TabsProps>;
/**
 * TabsList component - Container for tab triggers
 */
declare const TabsList: React.FC<TabsListProps>;
/**
 * TabsTrigger component - Individual tab button
 */
declare const TabsTrigger: React.FC<TabsTriggerProps>;
/**
 * TabsContent component - Content area for each tab
 */
declare const TabsContent: React.FC<TabsContentProps>;
export { Tabs, TabsList, TabsTrigger, TabsContent };
//# sourceMappingURL=tabs.d.ts.map