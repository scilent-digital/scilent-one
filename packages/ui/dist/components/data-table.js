import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { cn } from "@/lib/utils";
export function DataTable({ data, columns, className, emptyMessage = "No data available", loading = false, onRowClick, }) {
    const [sortColumn, setSortColumn] = React.useState(null);
    const [sortDirection, setSortDirection] = React.useState(null);
    const handleSort = React.useCallback((columnKey) => {
        setSortColumn((prev) => {
            if (prev === columnKey) {
                setSortDirection((prevDir) => {
                    if (prevDir === "asc")
                        return "desc";
                    if (prevDir === "desc")
                        return null;
                    return "asc";
                });
                return prev === null ? null : columnKey;
            }
            else {
                setSortDirection("asc");
                return columnKey;
            }
        });
    }, []);
    const sortedData = React.useMemo(() => {
        if (!sortColumn || !sortDirection)
            return data;
        return [...data].sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
            if (aValue === bValue)
                return 0;
            const comparison = aValue < bValue ? -1 : 1;
            return sortDirection === "asc" ? comparison : -comparison;
        });
    }, [data, sortColumn, sortDirection]);
    const getSortIcon = (columnKey) => {
        if (sortColumn !== columnKey) {
            return _jsx(ChevronsUpDown, { className: "ml-2 h-4 w-4" });
        }
        if (sortDirection === "asc") {
            return _jsx(ChevronUp, { className: "ml-2 h-4 w-4" });
        }
        if (sortDirection === "desc") {
            return _jsx(ChevronDown, { className: "ml-2 h-4 w-4" });
        }
        return _jsx(ChevronsUpDown, { className: "ml-2 h-4 w-4" });
    };
    if (loading) {
        return (_jsx("div", { className: "flex items-center justify-center py-10", children: _jsx("div", { className: "text-sm text-muted-foreground", children: "Loading..." }) }));
    }
    return (_jsx("div", { className: cn("rounded-md border", className), children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsx(TableRow, { children: columns.map((column) => (_jsx(TableHead, { className: cn(column.headerClassName), children: column.sortable ? (_jsxs(Button, { variant: "ghost", size: "sm", className: "-ml-3 h-8 data-[state=open]:bg-accent", onClick: () => handleSort(String(column.key)), children: [_jsx("span", { children: column.title }), getSortIcon(String(column.key))] })) : (column.title) }, String(column.key)))) }) }), _jsx(TableBody, { children: sortedData.length === 0 ? (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center text-muted-foreground", children: emptyMessage }) })) : (sortedData.map((item, index) => (_jsx(TableRow, { className: cn(onRowClick && "cursor-pointer hover:bg-muted/50"), onClick: () => onRowClick?.(item, index), children: columns.map((column) => {
                            const value = item[column.key];
                            return (_jsx(TableCell, { className: cn(column.className), children: column.render
                                    ? column.render(value, item, index)
                                    : String(value ?? "") }, String(column.key)));
                        }) }, index)))) })] }) }));
}
//# sourceMappingURL=data-table.js.map