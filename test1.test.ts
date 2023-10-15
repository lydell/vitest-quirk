import { expect, test } from "vitest";
import { myFunction1 } from ".";

test("myFunction1", () => {
  expect(myFunction1()).toBe(1);
});
