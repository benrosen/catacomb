import { Mob } from "enums/mob";

/**
 * Validate a Mob string.
 *
 * @param str The string to validate.
 * @returns True if the given string is a valid Mob string.
 */
export const isValidMobString = (str: string): boolean => {
  return str
    ? Object.values(Mob).some((validMobString: string) => {
        return str === validMobString;
      })
    : true;
};
