import { add } from "./StringCalculator";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two numbers separated by commas", () => {
    expect(add("1,2")).toBe(3);
  });

  test("should handle an unknown amount of numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("should handle new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should throw an error with negative numbers", () => {
    expect(() => add("1,-2")).toThrow("Negatives not allowed: -2");
    expect(() => add("-1,-2")).toThrow("Negatives not allowed: -1, -2");
  });

  test("should ignore numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
  });

  test("should allow delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  test("should allow multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("should handle multiple delimiters with length longer than one character", () => {
    expect(add("//[***][%%]\n1***2%%3")).toBe(6);
  });
});
