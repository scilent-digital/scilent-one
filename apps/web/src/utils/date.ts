/**
 * Date utility functions
 */

/**
 * Formats a date to a localized string
 * @param date - The date to format
 * @param locale - The locale (default: 'en-US')
 * @param options - Intl.DateTimeFormat options
 * @returns The formatted date string
 * @example
 * formatDate(new Date(), 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })
 * // 'January 1, 2024'
 */
export function formatDate(
  date: Date | string | number,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {}
): string {
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return 'Invalid Date';

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Gets the relative time string (e.g., "2 hours ago")
 * @param date - The date to compare
 * @param locale - The locale (default: 'en-US')
 * @returns The relative time string
 * @example
 * relativeTime(new Date(Date.now() - 3600000)) // '1 hour ago'
 */
export function relativeTime(
  date: Date | string | number,
  locale: string = 'en-US'
): string {
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return 'Invalid Date';

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const now = new Date();
  const diffInMs = now.getTime() - dateObj.getTime();
  const absDiffInMs = Math.abs(diffInMs);

  // Determine the appropriate unit
  if (absDiffInMs < 1000) {
    return rtf.format(0, 'second');
  } else if (absDiffInMs < 60000) {
    return rtf.format(-Math.sign(diffInMs) * Math.floor(absDiffInMs / 1000), 'second');
  } else if (absDiffInMs < 3600000) {
    return rtf.format(-Math.sign(diffInMs) * Math.floor(absDiffInMs / 60000), 'minute');
  } else if (absDiffInMs < 86400000) {
    return rtf.format(-Math.sign(diffInMs) * Math.floor(absDiffInMs / 3600000), 'hour');
  } else if (absDiffInMs < 604800000) {
    return rtf.format(-Math.sign(diffInMs) * Math.floor(absDiffInMs / 86400000), 'day');
  } else if (absDiffInMs < 2592000000) {
    return rtf.format(-Math.sign(diffInMs) * Math.floor(absDiffInMs / 604800000), 'week');
  } else if (absDiffInMs < 31536000000) {
    return rtf.format(-Math.sign(diffInMs) * Math.floor(absDiffInMs / 2592000000), 'month');
  } else {
    return rtf.format(-Math.sign(diffInMs) * Math.floor(absDiffInMs / 31536000000), 'year');
  }
}

/**
 * Checks if a date is today
 * @param date - The date to check
 * @returns True if the date is today
 * @example
 * isToday(new Date()) // true
 */
export function isToday(date: Date | string | number): boolean {
  const dateObj = new Date(date);
  const today = new Date();

  return (
    dateObj.getDate() === today.getDate() &&
    dateObj.getMonth() === today.getMonth() &&
    dateObj.getFullYear() === today.getFullYear()
  );
}

/**
 * Checks if a date is yesterday
 * @param date - The date to check
 * @returns True if the date is yesterday
 * @example
 * isYesterday(new Date(Date.now() - 86400000)) // true
 */
export function isYesterday(date: Date | string | number): boolean {
  const dateObj = new Date(date);
  const yesterday = new Date(Date.now() - 86400000);

  return (
    dateObj.getDate() === yesterday.getDate() &&
    dateObj.getMonth() === yesterday.getMonth() &&
    dateObj.getFullYear() === yesterday.getFullYear()
  );
}

/**
 * Checks if a date is in the future
 * @param date - The date to check
 * @returns True if the date is in the future
 * @example
 * isFuture(new Date(Date.now() + 3600000)) // true
 */
export function isFuture(date: Date | string | number): boolean {
  const dateObj = new Date(date);
  return dateObj.getTime() > Date.now();
}

/**
 * Checks if a date is in the past
 * @param date - The date to check
 * @returns True if the date is in the past
 * @example
 * isPast(new Date(Date.now() - 3600000)) // true
 */
export function isPast(date: Date | string | number): boolean {
  const dateObj = new Date(date);
  return dateObj.getTime() < Date.now();
}

/**
 * Adds time to a date
 * @param date - The base date
 * @param amount - Amount to add
 * @param unit - Unit of time ('years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds')
 * @returns New date with added time
 * @example
 * addTime(new Date(), 1, 'day') // Tomorrow's date
 */
export function addTime(
  date: Date | string | number,
  amount: number,
  unit: 'years' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds'
): Date {
  const dateObj = new Date(date);
  const newDate = new Date(dateObj);

  switch (unit) {
    case 'years':
      newDate.setFullYear(dateObj.getFullYear() + amount);
      break;
    case 'months':
      newDate.setMonth(dateObj.getMonth() + amount);
      break;
    case 'weeks':
      newDate.setDate(dateObj.getDate() + amount * 7);
      break;
    case 'days':
      newDate.setDate(dateObj.getDate() + amount);
      break;
    case 'hours':
      newDate.setHours(dateObj.getHours() + amount);
      break;
    case 'minutes':
      newDate.setMinutes(dateObj.getMinutes() + amount);
      break;
    case 'seconds':
      newDate.setSeconds(dateObj.getSeconds() + amount);
      break;
  }

  return newDate;
}

/**
 * Gets the start of day for a date
 * @param date - The date
 * @returns New date at the start of the day (00:00:00)
 * @example
 * startOfDay(new Date()) // Today at 00:00:00
 */
export function startOfDay(date: Date | string | number): Date {
  const dateObj = new Date(date);
  return new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
}