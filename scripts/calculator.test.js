const calculator = require("./calculator");
test("Returns NaN for empty", () => {
    expect(calculator("")).toBe(NaN);
});
test("Returns Infinity for 5 + 2 / 0", () => {
    expect(calculator("5 + 2 / 0")).toBe(Infinity);
});
test("Returns 0.67 for 2 / 3", () => {
    expect(calculator("2 / 3")).toBe(0.67);
});
test("Returns 56 for (8- 1) *  12 /(1+.5)", () => {
    expect(calculator("(8- 1) *  12 /(1+.5)")).toBe(56);
});
test("Returns -14 for 2 +4-8*5 /  2*(3 *2- 2 -3)", () => {
    expect(calculator("2 +4-8*5 /  2*(6-2 -3)")).toBe(-14);
});