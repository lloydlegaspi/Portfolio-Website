import { describe, expect, it } from "vitest";
import { chatRequestSchema, MAX_CHAT_MESSAGE_LENGTH } from "./chat-validation";

describe("chat request validation", () => {
  it("trims and accepts a valid message", () =>
    expect(chatRequestSchema.parse({ message: "  Skills?  " }).message).toBe(
      "Skills?",
    ));
  it.each([
    { message: "" },
    { message: "   " },
    { message: "x".repeat(MAX_CHAT_MESSAGE_LENGTH + 1) },
    { message: 4 },
    { prompt: "hello" },
  ])("rejects malformed input %#", (value) =>
    expect(chatRequestSchema.safeParse(value).success).toBe(false),
  );
});
