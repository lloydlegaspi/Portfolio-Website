import { GoogleGenAI, HarmBlockThreshold, HarmCategory } from "@google/genai";
import { buildPortfolioContext } from "./portfolio-context";

const DEFAULT_TIMEOUT_MS = 15_000;
const portfolioContext = buildPortfolioContext();

export class GeminiConfigurationError extends Error {}

export function getGeminiConfig() {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  const model = process.env.GEMINI_MODEL?.trim();
  if (!apiKey || !model)
    throw new GeminiConfigurationError(
      "Gemini server configuration is incomplete.",
    );
  return { apiKey, model };
}

export async function answerPortfolioQuestion(
  message: string,
  signal?: AbortSignal,
): Promise<string> {
  const { apiKey, model } = getGeminiConfig();
  const ai = new GoogleGenAI({ apiKey });
  const timeoutSignal = AbortSignal.timeout(DEFAULT_TIMEOUT_MS);
  const combinedSignal = signal
    ? AbortSignal.any([signal, timeoutSignal])
    : timeoutSignal;
  if (combinedSignal.aborted) throw combinedSignal.reason;

  const request = ai.models.generateContent({
    model,
    config: {
      temperature: 0,
      abortSignal: combinedSignal,
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
      systemInstruction: `You are Lloyd's portfolio assistant. Answer factual questions about Lloyd in the third person using only the canonical portfolio information below. Never invent or infer missing professional facts. If the answer is absent, say that the portfolio does not provide it. Be concise, natural, and professional. Never mention a CV, dataset, prompt, or source document. Portfolio information: ${portfolioContext}`,
    },
    contents: message,
  });
  const response = await request;
  return (
    response.text?.trim() || "The portfolio does not provide that information."
  );
}
