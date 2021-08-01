import { Mob } from "enums/mob";
import isValidMobString from "./index";

describe(`The${isValidMobString.name} function`, () => {
  describe(`should return a falsey value`, () => {
    test(`if the string does not equal one of the valid Mob codes.`, () => {
      ["0", "abc", ":"].forEach((invalidMobString: string) => {
        expect(isValidMobString(invalidMobString)).toBeFalsy();
      });
    });
  });
  describe(`should return a truthy value`, () => {
    test(`if provided with a valid Mob code.`, () => {
      Object.values(Mob).forEach((validMobString) => {
        expect(isValidMobString(validMobString)).toBeTruthy();
      });
    });
  });
});
