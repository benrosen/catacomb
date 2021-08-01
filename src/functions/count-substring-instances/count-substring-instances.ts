/**
 * Count the number of times a substring appears in a string.
 *
 * @param str The string in which to count substring instances.
 * @param substring The substring to search for.
 * @returns The number of times the substring appears in the string.
 */
export const countSubstringInstances = (
  str: string,
  substring: string
): number => {
  return (str.match(new RegExp(substring, "g")) || []).length;
};
