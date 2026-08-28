import { beforeEach, describe, expect, it, vi } from "vitest";

const { answerPortfolioQuestion } = vi.hoisted(() => ({
  answerPortfolioQuestion: vi.fn(),
}));
vi.mock("@/lib/gemini", () => ({
  answerPortfolioQuestion,
  GeminiConfigurationError: class GeminiConfigurationError extends Error {},
}));

import { createChatErrorResponse, POST } from "./route";

describe("POST /api/chat", () => {
  beforeEach(() => answerPortfolioQuestion.mockReset());
  it("returns a model reply", async () => {
    answerPortfolioQuestion.mockResolvedValue("Lloyd builds software.");
    const response = await POST(
      new Request("http://localhost/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "What does Lloyd build?" }),
      }),
    );
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ reply: "Lloyd builds software." });
  });
  it("returns 422 for invalid input", async () => {
    const response = await POST(
      new Request("http://localhost/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "" }),
      }),
    );
    expect(response.status).toBe(422);
  });
  it("does not expose provider errors", async () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const response = createChatErrorResponse(
      new Error("secret provider detail"),
      "test-request",
    );
    expect(response.status).toBe(503);
    expect(JSON.stringify(await response.json())).not.toContain(
      "secret provider detail",
    );
    expect(log).toHaveBeenCalledOnce();
    log.mockRestore();
  });
});
