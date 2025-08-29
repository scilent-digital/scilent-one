import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
const SidebarContext = React.createContext({
    isCollapsed: false,
    setIsCollapsed: () => { },
});
const Sidebar = React.forwardRef(({ items = [], header, footer, collapsible = false, defaultCollapsed = false, className, children, }, ref) => {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
    return (_jsx(SidebarContext.Provider, { value: { isCollapsed, setIsCollapsed }, children: _jsxs("div", { ref: ref, className: cn("flex h-full flex-col border-r bg-background transition-all duration-300", isCollapsed ? "w-16" : "w-64", className), children: [header && (_jsxs("div", { className: "flex h-14 items-center border-b px-3", children: [_jsx("div", { className: cn("flex-1", isCollapsed && "hidden"), children: header }), collapsible && (_jsx(Button, { variant: "ghost", size: "icon", className: "ml-auto", onClick: () => setIsCollapsed(!isCollapsed), children: isCollapsed ? (_jsx(ChevronRight, { className: "h-4 w-4" })) : (_jsx(ChevronLeft, { className: "h-4 w-4" })) }))] })), _jsxs("nav", { className: "flex-1 space-y-1 p-2", children: [items.map((item, index) => (_jsx(SidebarNavItem, { item: item }, index))), children] }), footer && !isCollapsed && (_jsxs(_Fragment, { children: [_jsx(Separator, {}), _jsx("div", { className: "p-3", children: footer })] }))] }) }));
});
Sidebar.displayName = "Sidebar";
const SidebarNavItem = React.forwardRef(({ item, className }, ref) => {
    const { isCollapsed } = React.useContext(SidebarContext);
    const [isOpen, setIsOpen] = React.useState(false);
    if (item.items && !isCollapsed) {
        return (_jsxs("div", { ref: ref, className: className, children: [_jsxs(Button, { variant: "ghost", className: "w-full justify-start", onClick: () => setIsOpen(!isOpen), children: [item.icon && _jsx("span", { className: "mr-2", children: item.icon }), _jsx("span", { className: "flex-1 text-left", children: item.title }), item.badge && _jsx("span", { className: "ml-auto", children: item.badge }), _jsx(ChevronRight, { className: cn("ml-auto h-4 w-4 transition-transform", isOpen && "rotate-90") })] }), isOpen && (_jsx("div", { className: "ml-6 mt-1 space-y-1", children: item.items.map((subItem, index) => (_jsx(SidebarNavItem, { item: subItem }, index))) }))] }));
    }
    return (_jsx("div", { ref: ref, className: className, children: _jsx(Button, { variant: "ghost", className: cn("w-full justify-start", isCollapsed && "justify-center px-2"), asChild: !!item.href, children: item.href ? (_jsxs("a", { href: item.href, children: [item.icon && (_jsx("span", { className: cn("mr-2", isCollapsed && "mr-0"), children: item.icon })), !isCollapsed && (_jsxs(_Fragment, { children: [_jsx("span", { className: "flex-1 text-left", children: item.title }), item.badge && _jsx("span", { className: "ml-auto", children: item.badge })] }))] })) : (_jsxs(_Fragment, { children: [item.icon && (_jsx("span", { className: cn("mr-2", isCollapsed && "mr-0"), children: item.icon })), !isCollapsed && (_jsxs(_Fragment, { children: [_jsx("span", { className: "flex-1 text-left", children: item.title }), item.badge && _jsx("span", { className: "ml-auto", children: item.badge })] }))] })) }) }));
});
SidebarNavItem.displayName = "SidebarNavItem";
export { Sidebar };
//# sourceMappingURL=sidebar.js.map