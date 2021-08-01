import { ItemCode } from "enums/item-code";

/**
 * Validate an Item string.
 *
 * @param str The string to validate.
 * @returns True if the given string is a valid Item string.
 */
export const isValidItemString = (str: string): boolean => {
  return str
    ? Object.values(ItemCode).some((validItemString: string) => {
        return str === validItemString;
      })
    : true;
};
