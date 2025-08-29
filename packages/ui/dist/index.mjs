"use client";

// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatTitle(str) {
  return str.split(/[-_\s]+/).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}
function getInitials(name) {
  return name.split(" ").map((word) => word.charAt(0)).join("").toUpperCase().slice(0, 2);
}

// src/components/ui/button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/input.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/ui/label.tsx
import * as React3 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var labelVariants = cva2(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx3(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/ui/textarea.tsx
import * as React4 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Textarea = React4.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/ui/checkbox.tsx
import * as React5 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Checkbox = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx5(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsx5(Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/ui/switch.tsx
import * as React6 from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { jsx as jsx6 } from "react/jsx-runtime";
var Switch = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx6(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/components/ui/select.tsx
import * as React7 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown, ChevronUp } from "lucide-react";
import { jsx as jsx7, jsxs } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx7(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx7(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx7(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx7(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React7.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx7(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx7(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx7(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx7(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx7("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx7(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx7(Check2, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx7(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx7(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/components/ui/card.tsx
import * as React8 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var Card = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props }));
CardHeader.displayName = "CardHeader";
var CardTitle = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/ui/separator.tsx
import * as React9 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx9 } from "react/jsx-runtime";
var Separator2 = React9.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx9(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator2.displayName = SeparatorPrimitive.Root.displayName;

// src/components/ui/accordion.tsx
import * as React10 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown as ChevronDown2 } from "lucide-react";
import { jsx as jsx10, jsxs as jsxs2 } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React10.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx10(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs2(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx10(ChevronDown2, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React10.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx10(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx10("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/ui/dialog.tsx
import * as React11 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs3(DialogPortal, { children: [
  /* @__PURE__ */ jsx11(DialogOverlay, {}),
  /* @__PURE__ */ jsxs3(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs3(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx11(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx11("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx11(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx11(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx11(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/ui/alert-dialog.tsx
import * as React12 from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { jsx as jsx12, jsxs as jsxs4 } from "react/jsx-runtime";
var AlertDialog = AlertDialogPrimitive.Root;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
var AlertDialogOverlay = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs4(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx12(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx12(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx12(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx12(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// src/components/ui/popover.tsx
import * as React13 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx13 } from "react/jsx-runtime";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverContent = React13.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx13(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx13(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/ui/tooltip.tsx
import * as React14 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx14 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React14.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx14(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/components/ui/dropdown-menu.tsx
import * as React15 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check as Check3, ChevronRight, Circle } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs5 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React15.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs5(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx15(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React15.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx15(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx15(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React15.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx15(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React15.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs5(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx15("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx15(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx15(Check3, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React15.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs5(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx15("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx15(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx15(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React15.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx15(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx15(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/ui/navigation-menu.tsx
import * as React16 from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva as cva3 } from "class-variance-authority";
import { ChevronDown as ChevronDown3 } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs6 } from "react/jsx-runtime";
var NavigationMenu = React16.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs6(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx16(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = cva3(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
var NavigationMenuTrigger = React16.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs6(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsx16(
        ChevronDown3,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx16("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsx16(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx16(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx16("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// src/components/ui/tabs.tsx
import * as React17 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { jsx as jsx17 } from "react/jsx-runtime";
var Tabs = TabsPrimitive.Root;
var TabsList = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React17.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx17(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/ui/toast.tsx
import * as React18 from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva as cva4 } from "class-variance-authority";
import { X as X2 } from "lucide-react";
import { jsx as jsx18 } from "react/jsx-runtime";
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva4(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React18.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx18(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx18(X2, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx18(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// src/hooks/use-toast.ts
import * as React19 from "react";
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React19.useState(memoryState);
  React19.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// src/components/ui/toaster.tsx
import { jsx as jsx19, jsxs as jsxs7 } from "react/jsx-runtime";
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs7(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs7(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs7("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx19(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx19(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx19(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx19(ToastViewport, {})
  ] });
}

// src/components/ui/badge.tsx
import "react";
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx20 } from "react/jsx-runtime";
var badgeVariants = cva5(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx20("div", { className: cn(badgeVariants({ variant }), className), ...props });
}

// src/components/ui/table.tsx
import * as React21 from "react";
import { jsx as jsx21 } from "react/jsx-runtime";
var Table = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx21(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
var TableCell = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx21(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";

// src/components/ui/avatar.tsx
import * as React22 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx22 } from "react/jsx-runtime";
var Avatar = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/components/navbar.tsx
import * as React23 from "react";
import { Menu, X as X3 } from "lucide-react";
import { Fragment, jsx as jsx23, jsxs as jsxs8 } from "react/jsx-runtime";
var Navbar = React23.forwardRef(
  ({ items = [], logo, actions, className }, ref) => {
    const [isOpen, setIsOpen] = React23.useState(false);
    return /* @__PURE__ */ jsxs8(
      "header",
      {
        ref,
        className: cn(
          "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          className
        ),
        children: [
          /* @__PURE__ */ jsxs8("div", { className: "container flex h-14 items-center", children: [
            /* @__PURE__ */ jsx23("div", { className: "mr-4 flex", children: logo && /* @__PURE__ */ jsx23("div", { className: "mr-6 flex items-center space-x-2", children: logo }) }),
            /* @__PURE__ */ jsx23("div", { className: "hidden md:flex", children: /* @__PURE__ */ jsx23(NavigationMenu, { children: /* @__PURE__ */ jsx23(NavigationMenuList, { children: items.map((item, index) => /* @__PURE__ */ jsx23(NavigationMenuItem, { children: item.items ? /* @__PURE__ */ jsxs8(Fragment, { children: [
              /* @__PURE__ */ jsx23(NavigationMenuTrigger, { children: item.title }),
              /* @__PURE__ */ jsx23(NavigationMenuContent, { children: /* @__PURE__ */ jsx23("ul", { className: "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: item.items.map((subItem, subIndex) => /* @__PURE__ */ jsx23("li", { children: /* @__PURE__ */ jsx23(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs8(
                "a",
                {
                  className: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  href: subItem.href,
                  children: [
                    /* @__PURE__ */ jsx23("div", { className: "text-sm font-medium leading-none", children: subItem.title }),
                    subItem.description && /* @__PURE__ */ jsx23("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: subItem.description })
                  ]
                }
              ) }) }, subIndex)) }) })
            ] }) : /* @__PURE__ */ jsx23(
              NavigationMenuLink,
              {
                className: navigationMenuTriggerStyle(),
                href: item.href,
                children: item.title
              }
            ) }, index)) }) }) }),
            /* @__PURE__ */ jsx23(
              Button,
              {
                variant: "ghost",
                size: "icon",
                className: "md:hidden ml-auto",
                onClick: () => setIsOpen(!isOpen),
                "aria-label": "Toggle menu",
                children: isOpen ? /* @__PURE__ */ jsx23(X3, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx23(Menu, { className: "h-4 w-4" })
              }
            ),
            actions && /* @__PURE__ */ jsx23("div", { className: "ml-auto hidden md:flex", children: actions })
          ] }),
          isOpen && /* @__PURE__ */ jsx23("div", { className: "border-t md:hidden", children: /* @__PURE__ */ jsx23("div", { className: "container py-4", children: /* @__PURE__ */ jsxs8("nav", { className: "flex flex-col space-y-3", children: [
            items.map((item, index) => /* @__PURE__ */ jsxs8("div", { children: [
              /* @__PURE__ */ jsx23(
                "a",
                {
                  href: item.href,
                  className: "text-sm font-medium transition-colors hover:text-primary",
                  onClick: () => setIsOpen(false),
                  children: item.title
                }
              ),
              item.items && /* @__PURE__ */ jsx23("div", { className: "ml-4 mt-2 space-y-2", children: item.items.map((subItem, subIndex) => /* @__PURE__ */ jsx23(
                "a",
                {
                  href: subItem.href,
                  className: "block text-sm text-muted-foreground transition-colors hover:text-primary",
                  onClick: () => setIsOpen(false),
                  children: subItem.title
                },
                subIndex
              )) })
            ] }, index)),
            actions && /* @__PURE__ */ jsxs8(Fragment, { children: [
              /* @__PURE__ */ jsx23(Separator2, { className: "my-2" }),
              /* @__PURE__ */ jsx23("div", { className: "flex flex-col space-y-2", children: actions })
            ] })
          ] }) }) })
        ]
      }
    );
  }
);
Navbar.displayName = "Navbar";

// src/components/sidebar.tsx
import * as React24 from "react";
import { ChevronLeft, ChevronRight as ChevronRight2 } from "lucide-react";
import { Fragment as Fragment2, jsx as jsx24, jsxs as jsxs9 } from "react/jsx-runtime";
var SidebarContext = React24.createContext({
  isCollapsed: false,
  setIsCollapsed: () => {
  }
});
var Sidebar = React24.forwardRef(
  ({
    items = [],
    header,
    footer,
    collapsible = false,
    defaultCollapsed = false,
    className,
    children
  }, ref) => {
    const [isCollapsed, setIsCollapsed] = React24.useState(defaultCollapsed);
    return /* @__PURE__ */ jsx24(SidebarContext.Provider, { value: { isCollapsed, setIsCollapsed }, children: /* @__PURE__ */ jsxs9(
      "div",
      {
        ref,
        className: cn(
          "flex h-full flex-col border-r bg-background transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
          className
        ),
        children: [
          header && /* @__PURE__ */ jsxs9("div", { className: "flex h-14 items-center border-b px-3", children: [
            /* @__PURE__ */ jsx24("div", { className: cn("flex-1", isCollapsed && "hidden"), children: header }),
            collapsible && /* @__PURE__ */ jsx24(
              Button,
              {
                variant: "ghost",
                size: "icon",
                className: "ml-auto",
                onClick: () => setIsCollapsed(!isCollapsed),
                children: isCollapsed ? /* @__PURE__ */ jsx24(ChevronRight2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx24(ChevronLeft, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs9("nav", { className: "flex-1 space-y-1 p-2", children: [
            items.map((item, index) => /* @__PURE__ */ jsx24(SidebarNavItem, { item }, index)),
            children
          ] }),
          footer && !isCollapsed && /* @__PURE__ */ jsxs9(Fragment2, { children: [
            /* @__PURE__ */ jsx24(Separator2, {}),
            /* @__PURE__ */ jsx24("div", { className: "p-3", children: footer })
          ] })
        ]
      }
    ) });
  }
);
Sidebar.displayName = "Sidebar";
var SidebarNavItem = React24.forwardRef(({ item, className }, ref) => {
  const { isCollapsed } = React24.useContext(SidebarContext);
  const [isOpen, setIsOpen] = React24.useState(false);
  if (item.items && !isCollapsed) {
    return /* @__PURE__ */ jsxs9("div", { ref, className, children: [
      /* @__PURE__ */ jsxs9(
        Button,
        {
          variant: "ghost",
          className: "w-full justify-start",
          onClick: () => setIsOpen(!isOpen),
          children: [
            item.icon && /* @__PURE__ */ jsx24("span", { className: "mr-2", children: item.icon }),
            /* @__PURE__ */ jsx24("span", { className: "flex-1 text-left", children: item.title }),
            item.badge && /* @__PURE__ */ jsx24("span", { className: "ml-auto", children: item.badge }),
            /* @__PURE__ */ jsx24(
              ChevronRight2,
              {
                className: cn(
                  "ml-auto h-4 w-4 transition-transform",
                  isOpen && "rotate-90"
                )
              }
            )
          ]
        }
      ),
      isOpen && /* @__PURE__ */ jsx24("div", { className: "ml-6 mt-1 space-y-1", children: item.items.map((subItem, index) => /* @__PURE__ */ jsx24(SidebarNavItem, { item: subItem }, index)) })
    ] });
  }
  return /* @__PURE__ */ jsx24("div", { ref, className, children: /* @__PURE__ */ jsx24(
    Button,
    {
      variant: "ghost",
      className: cn(
        "w-full justify-start",
        isCollapsed && "justify-center px-2"
      ),
      asChild: !!item.href,
      children: item.href ? /* @__PURE__ */ jsxs9("a", { href: item.href, children: [
        item.icon && /* @__PURE__ */ jsx24("span", { className: cn("mr-2", isCollapsed && "mr-0"), children: item.icon }),
        !isCollapsed && /* @__PURE__ */ jsxs9(Fragment2, { children: [
          /* @__PURE__ */ jsx24("span", { className: "flex-1 text-left", children: item.title }),
          item.badge && /* @__PURE__ */ jsx24("span", { className: "ml-auto", children: item.badge })
        ] })
      ] }) : /* @__PURE__ */ jsxs9(Fragment2, { children: [
        item.icon && /* @__PURE__ */ jsx24("span", { className: cn("mr-2", isCollapsed && "mr-0"), children: item.icon }),
        !isCollapsed && /* @__PURE__ */ jsxs9(Fragment2, { children: [
          /* @__PURE__ */ jsx24("span", { className: "flex-1 text-left", children: item.title }),
          item.badge && /* @__PURE__ */ jsx24("span", { className: "ml-auto", children: item.badge })
        ] })
      ] })
    }
  ) });
});
SidebarNavItem.displayName = "SidebarNavItem";

// src/components/drawer.tsx
import * as React25 from "react";
import { X as X4 } from "lucide-react";
import { Fragment as Fragment3, jsx as jsx25, jsxs as jsxs10 } from "react/jsx-runtime";
var Drawer = React25.forwardRef(
  ({
    open = false,
    onOpenChange,
    direction = "right",
    size = "md",
    children,
    className
  }, ref) => {
    React25.useEffect(() => {
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onOpenChange?.(false);
        }
      };
      if (open) {
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }, [open, onOpenChange]);
    if (!open) return null;
    const sizeClasses = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      full: "max-w-full"
    };
    const directionClasses = {
      left: "left-0 top-0 h-full",
      right: "right-0 top-0 h-full",
      top: "top-0 left-0 w-full",
      bottom: "bottom-0 left-0 w-full"
    };
    const animationClasses = {
      left: "data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
      right: "data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
      top: "data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
      bottom: "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom"
    };
    return /* @__PURE__ */ jsxs10(Fragment3, { children: [
      /* @__PURE__ */ jsx25(
        "div",
        {
          className: "fixed inset-0 z-50 bg-black/80",
          onClick: () => onOpenChange?.(false)
        }
      ),
      /* @__PURE__ */ jsx25(
        "div",
        {
          ref,
          className: cn(
            "fixed z-50 bg-background shadow-lg",
            directionClasses[direction],
            (direction === "left" || direction === "right") && sizeClasses[size],
            (direction === "top" || direction === "bottom") && "h-auto",
            animationClasses[direction],
            "animate-in fade-in-0 duration-300",
            className
          ),
          "data-state": open ? "open" : "closed",
          children
        }
      )
    ] });
  }
);
Drawer.displayName = "Drawer";
var DrawerHeader = React25.forwardRef(({ className, children, onClose, ...props }, ref) => /* @__PURE__ */ jsxs10(
  "div",
  {
    ref,
    className: cn(
      "flex items-center justify-between border-b p-4",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx25("div", { className: "flex-1", children }),
      onClose && /* @__PURE__ */ jsx25(Button, { variant: "ghost", size: "icon", onClick: onClose, children: /* @__PURE__ */ jsx25(X4, { className: "h-4 w-4" }) })
    ]
  }
));
DrawerHeader.displayName = "DrawerHeader";
var DrawerContent = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx25(
  "div",
  {
    ref,
    className: cn("flex-1 overflow-auto p-4", className),
    ...props
  }
));
DrawerContent.displayName = "DrawerContent";
var DrawerFooter = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx25(
  "div",
  {
    ref,
    className: cn(
      "flex items-center justify-end gap-2 border-t p-4",
      className
    ),
    ...props
  }
));
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx25(
  "h2",
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
DrawerTitle.displayName = "DrawerTitle";
var DrawerDescription = React25.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx25(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DrawerDescription.displayName = "DrawerDescription";

// src/components/form-field.tsx
import * as React26 from "react";
import { jsx as jsx26, jsxs as jsxs11 } from "react/jsx-runtime";
var FormField = React26.forwardRef(
  ({ label, description, error, required, className, children, htmlFor }, ref) => {
    const id = React26.useId();
    const fieldId = htmlFor || id;
    return /* @__PURE__ */ jsxs11("div", { ref, className: cn("space-y-2", className), children: [
      label && /* @__PURE__ */ jsxs11(Label, { htmlFor: fieldId, className: "text-sm font-medium", children: [
        label,
        required && /* @__PURE__ */ jsx26("span", { className: "text-destructive ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsxs11("div", { className: "space-y-1", children: [
        React26.isValidElement(children) && React26.cloneElement(children, {
          id: fieldId,
          "aria-describedby": description || error ? `${fieldId}-description` : void 0,
          "aria-invalid": error ? "true" : void 0
        }),
        description && !error && /* @__PURE__ */ jsx26(
          "p",
          {
            id: `${fieldId}-description`,
            className: "text-sm text-muted-foreground",
            children: description
          }
        ),
        error && /* @__PURE__ */ jsx26(
          "p",
          {
            id: `${fieldId}-description`,
            className: "text-sm text-destructive",
            children: error
          }
        )
      ] })
    ] });
  }
);
FormField.displayName = "FormField";

// src/components/data-table.tsx
import * as React27 from "react";
import { ChevronDown as ChevronDown4, ChevronUp as ChevronUp2, ChevronsUpDown } from "lucide-react";
import { jsx as jsx27, jsxs as jsxs12 } from "react/jsx-runtime";
function DataTable({
  data,
  columns,
  className,
  emptyMessage = "No data available",
  loading = false,
  onRowClick
}) {
  const [sortColumn, setSortColumn] = React27.useState(null);
  const [sortDirection, setSortDirection] = React27.useState(null);
  const handleSort = React27.useCallback((columnKey) => {
    setSortColumn((prev) => {
      if (prev === columnKey) {
        setSortDirection((prevDir) => {
          if (prevDir === "asc") return "desc";
          if (prevDir === "desc") return null;
          return "asc";
        });
        return prev === null ? null : columnKey;
      } else {
        setSortDirection("asc");
        return columnKey;
      }
    });
  }, []);
  const sortedData = React27.useMemo(() => {
    if (!sortColumn || !sortDirection) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (aValue === bValue) return 0;
      const comparison = aValue < bValue ? -1 : 1;
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [data, sortColumn, sortDirection]);
  const getSortIcon = (columnKey) => {
    if (sortColumn !== columnKey) {
      return /* @__PURE__ */ jsx27(ChevronsUpDown, { className: "ml-2 h-4 w-4" });
    }
    if (sortDirection === "asc") {
      return /* @__PURE__ */ jsx27(ChevronUp2, { className: "ml-2 h-4 w-4" });
    }
    if (sortDirection === "desc") {
      return /* @__PURE__ */ jsx27(ChevronDown4, { className: "ml-2 h-4 w-4" });
    }
    return /* @__PURE__ */ jsx27(ChevronsUpDown, { className: "ml-2 h-4 w-4" });
  };
  if (loading) {
    return /* @__PURE__ */ jsx27("div", { className: "flex items-center justify-center py-10", children: /* @__PURE__ */ jsx27("div", { className: "text-sm text-muted-foreground", children: "Loading..." }) });
  }
  return /* @__PURE__ */ jsx27("div", { className: cn("rounded-md border", className), children: /* @__PURE__ */ jsxs12(Table, { children: [
    /* @__PURE__ */ jsx27(TableHeader, { children: /* @__PURE__ */ jsx27(TableRow, { children: columns.map((column) => /* @__PURE__ */ jsx27(
      TableHead,
      {
        className: cn(column.headerClassName),
        children: column.sortable ? /* @__PURE__ */ jsxs12(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "-ml-3 h-8 data-[state=open]:bg-accent",
            onClick: () => handleSort(String(column.key)),
            children: [
              /* @__PURE__ */ jsx27("span", { children: column.title }),
              getSortIcon(String(column.key))
            ]
          }
        ) : column.title
      },
      String(column.key)
    )) }) }),
    /* @__PURE__ */ jsx27(TableBody, { children: sortedData.length === 0 ? /* @__PURE__ */ jsx27(TableRow, { children: /* @__PURE__ */ jsx27(
      TableCell,
      {
        colSpan: columns.length,
        className: "h-24 text-center text-muted-foreground",
        children: emptyMessage
      }
    ) }) : sortedData.map((item, index) => /* @__PURE__ */ jsx27(
      TableRow,
      {
        className: cn(
          onRowClick && "cursor-pointer hover:bg-muted/50"
        ),
        onClick: () => onRowClick?.(item, index),
        children: columns.map((column) => {
          const value = item[column.key];
          return /* @__PURE__ */ jsx27(
            TableCell,
            {
              className: cn(column.className),
              children: column.render ? column.render(value, item, index) : String(value ?? "")
            },
            String(column.key)
          );
        })
      },
      index
    )) })
  ] }) });
}
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  DataTable,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  FormField,
  Input,
  Label,
  Navbar,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator2 as Separator,
  Sidebar,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  buttonVariants,
  cn,
  formatTitle,
  getInitials,
  navigationMenuTriggerStyle,
  reducer,
  toast,
  useToast
};
//# sourceMappingURL=index.mjs.map