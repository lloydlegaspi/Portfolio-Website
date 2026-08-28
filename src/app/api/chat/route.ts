import { NextResponse } from "next/server";
import { ZodError } from "zod";
import {
  answerPortfolioQuestion,
  GeminiConfigurationError,
} from "@/lib/gemini";
import { chatRequestSchema } from "@/lib/chat-validation";

export const runtime = "nodejs";

interface ErrorLog {
  event: "portfolio_chat_error";
  requestId: string;
  errorType: string;
}

function logServerError(entry: ErrorLog) {
  console.error(JSON.stringify(entry));
}

export function createChatErrorResponse(error: unknown, requestId: string) {
  logServerError({
    event: "portfolio_chat_error",
    requestId,
    errorType:
      error instanceof GeminiConfigurationError
        ? "configuration"
        : error instanceof Error
          ? error.name
          : "unknown",
  });
  return NextResponse.json(
    {
      error:
        "The portfolio assistant is temporarily unavailable. Please try again later.",
    },
    { status: 503 },
  );
}

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json"))
      return NextResponse.json(
        { error: "Content-Type must be application/json." },
        { status: 415 },
      );
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Request body must be valid JSON." },
        { status: 400 },
      );
    }
    const { message } = chatRequestSchema.parse(body);
    const reply = await answerPortfolioQuestion(message, request.signal);
    return NextResponse.json({ reply });
  } catch (error) {
    if (error instanceof ZodError)
      return NextResponse.json(
        {
          error: "Invalid chat request.",
          issues: error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 422 },
      );
    return createChatErrorResponse(error, requestId);
  }
}

export function GET() {
  return NextResponse.json(
    { error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } },
  );
}
