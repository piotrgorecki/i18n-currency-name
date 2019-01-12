const currencyToName = require("./currencyToName");

describe("USD", () => {
  test("da", () => {
    expect(currencyToName("USD", "da")).toBe("Amerikanske dollar");
  });
  test("de", () => {
    expect(currencyToName("USD", "de")).toBe("Dollar");
  });
  test("el", () => {
    expect(currencyToName("USD", "el")).toBe("Δολάριο ΗΠΑ");
  });
  test("en", () => {
    expect(currencyToName("USD", "en")).toBe("US Dollar");
  });
  test("es", () => {
    expect(currencyToName("USD", "es")).toBe("Dólar estadounidense");
  });
  test("fi", () => {
    expect(currencyToName("USD", "fi")).toBe("Yhdysvaltain dollari");
  });
  test("fr", () => {
    expect(currencyToName("USD", "fr")).toBe("dollar");
  });
  test("it", () => {
    expect(currencyToName("USD", "it")).toBe("Dollaro statunitense");
  });
  test("ja", () => {
    expect(currencyToName("USD", "ja")).toBe("アメリカ合衆国ドル");
  });
  test("ko", () => {
    expect(currencyToName("USD", "ko")).toBe("미국 달러");
  });
  test("lt", () => {
    expect(currencyToName("USD", "lt")).toBe("JAV doleris");
  });
  test("pl", () => {
    expect(currencyToName("USD", "pl")).toBe("Dolar Amerykański");
  });
  test("pt", () => {
    expect(currencyToName("USD", "pt")).toBe("Dólar americano");
  });
  test("ro", () => {
    expect(currencyToName("USD", "ro")).toBe("Dolar american");
  });
  test("sv", () => {
    expect(currencyToName("USD", "sv")).toBe("Amerikansk dollar");
  });
  test("tr", () => {
    expect(currencyToName("USD", "tr")).toBe("Amerikan Doları");
  });
  test("ua", () => {
    expect(currencyToName("USD", "ua")).toBe("Долар США");
  });
  test("ur", () => {
    expect(currencyToName("USD", "ur")).toBe("یو ایس ڈالر");
  });
  test("zh", () => {
    expect(currencyToName("USD", "zh")).toBe("美元");
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
