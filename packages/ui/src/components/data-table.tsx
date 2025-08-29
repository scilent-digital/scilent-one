import * as React from "react"
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

export interface Column<T> {
  key: keyof T | string
  title: string
  sortable?: boolean
  render?: (value: any, item: T, index: number) => React.ReactNode
  className?: string
  headerClassName?: string
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  className?: string
  emptyMessage?: string
  loading?: boolean
  onRowClick?: (item: T, index: number) => void
}

type SortDirection = "asc" | "desc" | null

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  className,
  emptyMessage = "No data available",
  loading = false,
  onRowClick,
}: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = React.useState<string | null>(null)
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(null)

  const handleSort = React.useCallback((columnKey: string) => {
    setSortColumn((prev) => {
      if (prev === columnKey) {
        setSortDirection((prevDir) => {
          if (prevDir === "asc") return "desc"
          if (prevDir === "desc") return null
          return "asc"
        })
        return prev === null ? null : columnKey
      } else {
        setSortDirection("asc")
        return columnKey
      }
    })
  }, [])

  const sortedData = React.useMemo(() => {
    if (!sortColumn || !sortDirection) return data

    return [...data].sort((a, b) => {
      const aValue = a[sortColumn]
      const bValue = b[sortColumn]

      if (aValue === bValue) return 0

      const comparison = aValue < bValue ? -1 : 1
      return sortDirection === "asc" ? comparison : -comparison
    })
  }, [data, sortColumn, sortDirection])

  const getSortIcon = (columnKey: string) => {
    if (sortColumn !== columnKey) {
      return <ChevronsUpDown className="ml-2 h-4 w-4" />
    }
    if (sortDirection === "asc") {
      return <ChevronUp className="ml-2 h-4 w-4" />
    }
    if (sortDirection === "desc") {
      return <ChevronDown className="ml-2 h-4 w-4" />
    }
    return <ChevronsUpDown className="ml-2 h-4 w-4" />
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="text-sm text-muted-foreground">Loading...</div>
      </div>
    )
  }

  return (
    <div className={cn("rounded-md border", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={String(column.key)}
                className={cn(column.headerClassName)}
              >
                {column.sortable ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="-ml-3 h-8 data-[state=open]:bg-accent"
                    onClick={() => handleSort(String(column.key))}
                  >
                    <span>{column.title}</span>
                    {getSortIcon(String(column.key))}
                  </Button>
                ) : (
                  column.title
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-muted-foreground"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            sortedData.map((item, index) => (
              <TableRow
                key={index}
                className={cn(
                  onRowClick && "cursor-pointer hover:bg-muted/50"
                )}
                onClick={() => onRowClick?.(item, index)}
              >
                {columns.map((column) => {
                  const value = item[column.key as keyof T]
                  return (
                    <TableCell
                      key={String(column.key)}
                      className={cn(column.className)}
                    >
                      {column.render
                        ? column.render(value, item, index)
                        : String(value ?? "")}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}