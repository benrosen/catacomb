import countSubstringInstances from "functions/count-substring-instances";
import isValidItemString from "functions/is-valid-item-string";
import isValidMobString from "functions/is-valid-mob-string";
import isValidTileString from "functions/is-valid-tile-string";
import { separatorCount } from "./is-valid-cell-string.config.json";

/**
 * Validate a Cell string and its substrings.
 *
 * @param str The string to validate.
 * @param separator The separator used between substrings.
 * @returns True if the given string is a valid Cell string.
 */
export const isValidCellString = (str: string, separator = ":"): boolean => {
  return (
    countSubstringInstances(str, separator) === separatorCount &&
    str.split(separator).every((substring: string, index: number) => {
      return [isValidTileString, isValidItemString, isValidMobString][index](
        substring
      );
    })
  );
};
