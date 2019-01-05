const currencyToName = require("./currencyToName");

describe("USD", () => {
  test("de", () => {
    expect(currencyToName("USD", "de")).toBe("Dollar");
  });
  test("en", () => {
    expect(currencyToName("USD", "en")).toBe("US Dollar");
  });
  test("es", () => {
    expect(currencyToName("USD", "es")).toBe("Dólar estadounidense");
  });
  test("pl", () => {
    expect(currencyToName("USD", "pl")).toBe("Dolar Amerykański");
  });
  test("xyz", () => {
    expect(currencyToName("USD", "xyz")).toBe(undefined);
  });
});

describe("XYZ", () => {
  test("en", () => {
    expect(currencyToName("XYZ", "de")).toBe(undefined);
  });
  test("xyz", () => {
    expect(currencyToName("XYZ", "xyz")).toBe(undefined);
  });
});
