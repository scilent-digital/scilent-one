/**
 * @fileoverview Avatar component for user profile images
 *
 * This component provides an avatar with fallback support and
 * different sizes. It can display images or fallback to initials.
 */
import * as React from "react";
/**
 * Avatar component props interface
 */
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * AvatarImage component props interface
 */
interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
}
/**
 * AvatarFallback component props interface
 */
interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Avatar component - Main container
 */
declare const Avatar: React.FC<AvatarProps>;
/**
 * AvatarImage component - Image element
 */
declare const AvatarImage: React.FC<AvatarImageProps>;
/**
 * AvatarFallback component - Fallback content
 */
declare const AvatarFallback: React.FC<AvatarFallbackProps>;
export { Avatar, AvatarImage, AvatarFallback };
//# sourceMappingURL=avatar.d.ts.map