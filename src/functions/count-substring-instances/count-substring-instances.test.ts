import countSubstringInstances from "./index";

describe(`The${countSubstringInstances.name} function`, () => {
  it(`should return the number of times a substring occurs in a string.`, () => {
    [
      { expectedCount: 0, str: "a", substring: "b" },
      { expectedCount: 1, str: "1234", substring: "12" },
      { expectedCount: 2, str: "_:_:_", substring: ":" },
      { expectedCount: 3, str: "333", substring: "3" },
    ].forEach(({ expectedCount, str, substring }) => {
      expect(countSubstringInstances(str, substring)).toBe(expectedCount);
    });
  });
});
