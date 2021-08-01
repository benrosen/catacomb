import { Tile } from "enums/tile";
import isValidTileString from "./index";

describe(`The${isValidTileString.name} function`, () => {
  describe(`should return a falsey value`, () => {
    test(`if the string does not equal one of the valid Tile codes.`, () => {
      ["", "0", "abc", ":"].forEach((invalidTileString: string) => {
        expect(isValidTileString(invalidTileString)).toBeFalsy();
      });
    });
  });
  describe(`should return a truthy value`, () => {
    test(`if provided with a valid Tile code.`, () => {
      Object.values(Tile).forEach((validTileString) => {
        expect(isValidTileString(validTileString)).toBeTruthy();
      });
    });
  });
});
