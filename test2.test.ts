import { expect, test } from "vitest";
import { myFunction2 } from ".";

test("myFunction2", () => {
  expect(myFunction2()).toBe(2);
});
