import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @fileoverview Tabs component for content organization
 *
 * This component provides a tabs interface for organizing content into
 * different sections. Built on top of Radix UI tabs primitive.
 */
import * as React from "react";
import { cn } from "@/lib/utils";
const TabsContext = React.createContext(null);
function useTabsContext() {
    const context = React.useContext(TabsContext);
    if (!context) {
        throw new Error('Tabs components must be used within a Tabs component');
    }
    return context;
}
/**
 * Tabs component - Main container
 */
const Tabs = ({ children, defaultValue, value, onValueChange }) => {
    const [activeTab, setActiveTab] = React.useState(defaultValue || '');
    const currentValue = value || activeTab;
    const handleValueChange = (newValue) => {
        if (onValueChange) {
            onValueChange(newValue);
        }
        else {
            setActiveTab(newValue);
        }
    };
    return (_jsx(TabsContext.Provider, { value: { activeValue: currentValue, onValueChange: handleValueChange }, children: _jsx("div", { "data-state": currentValue, "data-orientation": "horizontal", children: children }) }));
};
/**
 * TabsList component - Container for tab triggers
 */
const TabsList = ({ className, children, ...props }) => {
    return (_jsx("div", { className: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className), ...props, children: children }));
};
/**
 * TabsTrigger component - Individual tab button
 */
const TabsTrigger = ({ className, children, value, ...props }) => {
    const { activeValue, onValueChange } = useTabsContext();
    return (_jsx("button", { className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", activeValue === value && "bg-background text-foreground shadow-sm", className), onClick: () => onValueChange(value), "data-state": activeValue === value ? "active" : "inactive", ...props, children: children }));
};
/**
 * TabsContent component - Content area for each tab
 */
const TabsContent = ({ className, children, value, ...props }) => {
    const { activeValue } = useTabsContext();
    return (_jsx("div", { className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", activeValue === value ? "block" : "hidden", className), "data-state": activeValue === value ? "active" : "inactive", ...props, children: children }));
};
export { Tabs, TabsList, TabsTrigger, TabsContent };
//# sourceMappingURL=tabs.js.map