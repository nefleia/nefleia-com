import { formatInTimeZone } from 'date-fns-tz';

/**
 * Formats a UTC date string to JST date string.
 * @param utcStr - The UTC date string to format.
 * @returns The formatted date string in JST (yyyy-MM-dd).
 */
export const formatJstDateFromUtc = (utcStr: string): string => {
  const date = new Date(utcStr);
  return formatInTimeZone(date, 'Asia/Tokyo', 'yyyy-MM-dd');
};
