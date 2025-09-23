/**
 * @fileoverview Avatar component for user profile images
 *
 * This component provides an avatar with fallback support and
 * different sizes. It can display images or fallback to initials.
 */

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Avatar component props interface
 */
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * AvatarImage component props interface
 */
interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

/**
 * AvatarFallback component props interface
 */
interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Avatar component - Main container
 */
const Avatar: React.FC<AvatarProps> = ({ className, children, ...props }) => (
  <div
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    {children}
  </div>
)

/**
 * AvatarImage component - Image element
 */
const AvatarImage: React.FC<AvatarImageProps> = ({ className, ...props }) => (
  <img
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
)

/**
 * AvatarFallback component - Fallback content
 */
const AvatarFallback: React.FC<AvatarFallbackProps> = ({ className, children, ...props }) => (
  <div
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { Avatar, AvatarImage, AvatarFallback }