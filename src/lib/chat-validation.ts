import { z } from "zod";

export const MAX_CHAT_MESSAGE_LENGTH = 1_000;

export const chatRequestSchema = z
  .object({
    message: z
      .string()
      .trim()
      .min(1, "Message is required.")
      .max(
        MAX_CHAT_MESSAGE_LENGTH,
        `Message must be ${MAX_CHAT_MESSAGE_LENGTH} characters or fewer.`,
      ),
  })
  .strict();

export type ChatRequest = z.infer<typeof chatRequestSchema>;
