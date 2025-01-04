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

it("should return a sum of delimiter seperated integer values", () => {
    expect(StringCalculator.add("//;\n1;2;3;4")).toBe(10)
})

it("should return an error if negative numbers are provided", () => {
    expect(() => StringCalculator.add("-1,-2,-3")).toThrow("negative numbers not allowed -1,-2,-3");
})

it("should ignore values greater than 1000 and return some of rest", () => {
    expect(StringCalculator.add("1001, 1002, 2, 3")).toBe(5);
})