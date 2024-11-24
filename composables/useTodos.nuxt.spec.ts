import { test, expect, beforeEach, vi, describe } from "vitest";

describe("todos", () => {
  beforeEach(() => {
    vi.mock("useNuxtApp");
  });
  test("test", () => {
    expect(true).toBe(true);
    const {} = useTodos();
  });
});
