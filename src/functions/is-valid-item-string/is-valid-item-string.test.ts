import { ItemCode } from "enums/item-code";
import isValidItemString from "./index";

describe(`The ${isValidItemString.name} function`, () => {
  describe(`should return a falsey value`, () => {
    test(`if the string does not equal one of the valid Item codes.`, () => {
      ["0", "abc", ":"].forEach((invalidItemString: string) => {
        expect(isValidItemString(invalidItemString)).toBeFalsy();
      });
    });
  });
  describe(`should return a truthy value`, () => {
    test(`if provided with a valid Item code.`, () => {
      Object.values(ItemCode).forEach((validItemString) => {
        expect(isValidItemString(validItemString)).toBeTruthy();
      });
    });
  });
});
