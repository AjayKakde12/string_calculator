import StringCalculator from "../src/StringCalculator"

it("should return 0 for empty string", () => {
    expect(StringCalculator.add("")).toBe(0)
});

it("should return a same value after passing single number", () => {
    expect(StringCalculator.add("1")).toBe(1)
});

it("should return sum of comma separated integer values", () => {
    expect(StringCalculator.add("1, 2, 3")).toBe(6)
});

it("should return a sum of integers separeted by new line", () => {
    expect(StringCalculator.add("1\n2, 3")).toBe(6)
});
