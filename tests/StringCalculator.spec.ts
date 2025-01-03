import StringCalculator from "../src/StringCalculator"

it("should return 0 for empty string", () => {
    expect(StringCalculator.add("")).toBe(0)
})