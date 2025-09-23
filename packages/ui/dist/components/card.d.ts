/**
 * @fileoverview Card components for content layout
 *
 * This module provides a set of card components that can be used to
 * create structured content layouts with headers, footers, and content areas.
 */
import * as React from "react";
/**
 * Card component props interface
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * CardHeader component props interface
 */
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * CardTitle component props interface
 */
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
/**
 * CardDescription component props interface
 */
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
/**
 * CardContent component props interface
 */
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * CardFooter component props interface
 */
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
/**
 * Card component - Main container
 */
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CardHeader component - Header section
 */
declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CardTitle component - Title text
 */
declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLParagraphElement>>;
/**
 * CardDescription component - Description text
 */
declare const CardDescription: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
/**
 * CardContent component - Main content area
 */
declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
/**
 * CardFooter component - Footer section
 */
declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, };
//# sourceMappingURL=card.d.ts.map