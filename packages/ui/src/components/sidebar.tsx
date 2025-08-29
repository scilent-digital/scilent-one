import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

export interface SidebarItem {
  title: string
  href?: string
  icon?: React.ReactNode
  items?: SidebarItem[]
  badge?: React.ReactNode
}

export interface SidebarProps {
  items?: SidebarItem[]
  header?: React.ReactNode
  footer?: React.ReactNode
  collapsible?: boolean
  defaultCollapsed?: boolean
  className?: string
  children?: React.ReactNode
}

const SidebarContext = React.createContext<{
  isCollapsed: boolean
  setIsCollapsed: (value: boolean) => void
}>({
  isCollapsed: false,
  setIsCollapsed: () => {},
})

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      items = [],
      header,
      footer,
      collapsible = false,
      defaultCollapsed = false,
      className,
      children,
    },
    ref
  ) => {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

    return (
      <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
        <div
          ref={ref}
          className={cn(
            "flex h-full flex-col border-r bg-background transition-all duration-300",
            isCollapsed ? "w-16" : "w-64",
            className
          )}
        >
          {/* Header */}
          {header && (
            <div className="flex h-14 items-center border-b px-3">
              <div className={cn("flex-1", isCollapsed && "hidden")}>
                {header}
              </div>
              {collapsible && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  {isCollapsed ? (
                    <ChevronRight className="h-4 w-4" />
                  ) : (
                    <ChevronLeft className="h-4 w-4" />
                  )}
                </Button>
              )}
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-2">
            {items.map((item, index) => (
              <SidebarNavItem key={index} item={item} />
            ))}
            {children}
          </nav>

          {/* Footer */}
          {footer && !isCollapsed && (
            <>
              <Separator />
              <div className="p-3">{footer}</div>
            </>
          )}
        </div>
      </SidebarContext.Provider>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarNavItem = React.forwardRef<
  HTMLDivElement,
  { item: SidebarItem; className?: string }
>(({ item, className }, ref) => {
  const { isCollapsed } = React.useContext(SidebarContext)
  const [isOpen, setIsOpen] = React.useState(false)

  if (item.items && !isCollapsed) {
    return (
      <div ref={ref} className={className}>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          <span className="flex-1 text-left">{item.title}</span>
          {item.badge && <span className="ml-auto">{item.badge}</span>}
          <ChevronRight
            className={cn(
              "ml-auto h-4 w-4 transition-transform",
              isOpen && "rotate-90"
            )}
          />
        </Button>
        {isOpen && (
          <div className="ml-6 mt-1 space-y-1">
            {item.items.map((subItem, index) => (
              <SidebarNavItem key={index} item={subItem} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start",
          isCollapsed && "justify-center px-2"
        )}
        asChild={!!item.href}
      >
        {item.href ? (
          <a href={item.href}>
            {item.icon && (
              <span className={cn("mr-2", isCollapsed && "mr-0")}>
                {item.icon}
              </span>
            )}
            {!isCollapsed && (
              <>
                <span className="flex-1 text-left">{item.title}</span>
                {item.badge && <span className="ml-auto">{item.badge}</span>}
              </>
            )}
          </a>
        ) : (
          <>
            {item.icon && (
              <span className={cn("mr-2", isCollapsed && "mr-0")}>
                {item.icon}
              </span>
            )}
            {!isCollapsed && (
              <>
                <span className="flex-1 text-left">{item.title}</span>
                {item.badge && <span className="ml-auto">{item.badge}</span>}
              </>
            )}
          </>
        )}
      </Button>
    </div>
  )
})
SidebarNavItem.displayName = "SidebarNavItem"

export { Sidebar }