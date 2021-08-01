import isValidCellString from "./index";
import { separatorCount } from "./is-valid-cell-string.config.json";

describe(`The ${isValidCellString.name} function`, () => {
  describe(`should return a falsey value`, () => {
    test(`if the string does not contain exactly ${separatorCount} separator characters.`, () => {
      ["", ":", ":::", "0", "12", "abc"].forEach(
        (invalidCellString: string) => {
          expect(isValidCellString(invalidCellString)).toBeFalsy();
        }
      );
    });
    test(`if the string starts with a separator character.`, () => {
      [":", "::", ""].forEach((invalidCellString: string) => {
        expect(isValidCellString(invalidCellString)).toBeFalsy();
      });
    });
  });
  describe(`should return a truthy value`, () => {
    test(`if the string is a valid cell string.`, () => {
      ["w::", "f:k:", "f:s:p"].forEach((validCellString: string) => {
        expect(isValidCellString(validCellString)).toBeTruthy();
      });
    });
  });
});
