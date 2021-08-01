import { Tile } from "enums/tile";

/**
 * Validate a Tile string.
 *
 * @param str The string to validate.
 * @returns True if the given string is a valid Tile string.
 */
export const isValidTileString = (str: string): boolean => {
  return Object.values(Tile).some((validTileString: string) => {
    return str === validTileString;
  });
};
