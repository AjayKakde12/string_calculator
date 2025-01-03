import StringCalculator from "../src/StringCalculator"

it("should return 0 for empty string", () => {
    expect(StringCalculator.add("")).toBe(0)
});

it("should return a same value after passing single number", () => {
    expect(StringCalculator.add("1")).toBe(1)
});