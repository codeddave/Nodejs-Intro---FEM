const { mapObjectToArray } = require("./utils");

describe("mapObjectToArray()", () => {
  test("maps object values to array using a callback", () => {
    const result = mapObjectToArray({ age: 40, height: 60 }, (k, v) => {
      return v + 10;
    });

    expect(result).toEqual([50, 70]);
  });

  test("callback gets called", () => {
    const mockCB = jest.fn();
    const result = mapObjectToArray({ age: 40, height: 60 }, mockCB);
    expect(mockCB).toHaveBeenCalled();
    expect(mockCB.mock.calls.length).toBe(2);
  });
});
