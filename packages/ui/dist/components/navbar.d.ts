import * as React from "react";
export interface NavItem {
    title: string;
    href?: string;
    description?: string;
    items?: NavItem[];
}
export interface NavbarProps {
    items?: NavItem[];
    logo?: React.ReactNode;
    actions?: React.ReactNode;
    className?: string;
}
declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
export { Navbar };
//# sourceMappingURL=navbar.d.ts.map