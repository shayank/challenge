const peterAlgorithm = require("./peterAlgorithm");
test("Returns 199 for 221", () => {
    expect(peterAlgorithm(221)).toBe(199);
});
test("Returns 22999 for 23245", () => {
    expect(peterAlgorithm(23245)).toBe(22999);
});
test("Returns 11235888 for 11235888", () => {
    expect(peterAlgorithm(11235888)).toBe(11235888);
});
test("Returns 99999 for 111110", () => {
    expect(peterAlgorithm(111110)).toBe(99999);
});
test("Returns 29999 for 33245", () => {
    expect(peterAlgorithm(33245)).toBe(29999);
});