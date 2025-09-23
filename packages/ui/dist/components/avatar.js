import { jsx as _jsx } from "react/jsx-runtime";
/**
 * @fileoverview Avatar component for user profile images
 *
 * This component provides an avatar with fallback support and
 * different sizes. It can display images or fallback to initials.
 */
import * as React from "react";
import { cn } from "@/lib/utils";
/**
 * Avatar component - Main container
 */
const Avatar = ({ className, children, ...props }) => (_jsx("div", { className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className), ...props, children: children }));
/**
 * AvatarImage component - Image element
 */
const AvatarImage = ({ className, ...props }) => (_jsx("img", { className: cn("aspect-square h-full w-full", className), ...props }));
/**
 * AvatarFallback component - Fallback content
 */
const AvatarFallback = ({ className, children, ...props }) => (_jsx("div", { className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className), ...props, children: children }));
export { Avatar, AvatarImage, AvatarFallback };
//# sourceMappingURL=avatar.js.map