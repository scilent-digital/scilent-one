import * as React from "react";
export interface Column<T> {
    key: keyof T | string;
    title: string;
    sortable?: boolean;
    render?: (value: any, item: T, index: number) => React.ReactNode;
    className?: string;
    headerClassName?: string;
}
export interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    className?: string;
    emptyMessage?: string;
    loading?: boolean;
    onRowClick?: (item: T, index: number) => void;
}
export declare function DataTable<T extends Record<string, any>>({ data, columns, className, emptyMessage, loading, onRowClick, }: DataTableProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=data-table.d.ts.map