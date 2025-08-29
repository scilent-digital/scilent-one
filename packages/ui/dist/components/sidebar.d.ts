import * as React from "react";
export interface SidebarItem {
    title: string;
    href?: string;
    icon?: React.ReactNode;
    items?: SidebarItem[];
    badge?: React.ReactNode;
}
export interface SidebarProps {
    items?: SidebarItem[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
    className?: string;
    children?: React.ReactNode;
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;
export { Sidebar };
//# sourceMappingURL=sidebar.d.ts.map