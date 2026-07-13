// utils/format.js

/**
 * Capitalizes the first letter of each word in a string.
 */
export function capitalizePhrase(phrase) {
  if (!phrase) return '';
  return phrase
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Formats a date string into a standard readable month/day format.
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
