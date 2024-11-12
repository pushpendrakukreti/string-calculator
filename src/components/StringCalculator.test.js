import { add } from "./StringCalculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself if one number is provided", () => {
  expect(add("1")).toBe(1);
});
