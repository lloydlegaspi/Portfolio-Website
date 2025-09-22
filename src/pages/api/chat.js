import { GoogleGenAI, HarmBlockThreshold, HarmCategory } from "@google/genai";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    // Load CV JSON
    const cvPath = path.join(process.cwd(), "src", "data", "cv.json");
    const cvData = JSON.parse(fs.readFileSync(cvPath, "utf-8"));

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const config = {
      temperature: 0,
      safetySettings: [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
      ],
    };

    const prompt = `
    You are Lloyd's portfolio assistant.

    Answer questions about Lloyd in the third person ("Lloyd", "he", "his"),
    as if you are Lloyd's portfolio assistant.
    Do not mention or reference a CV, dataset, or source document.
    Be concise, natural, and professional.

    Here is Lloyd's information:
    ${JSON.stringify(cvData, null, 2)}

    User Question: ${message}
    `;

    const model = "gemini-1.5-flash";
    let response;
    let retries = 3;

    while (retries > 0) {
      try {
        response = await ai.models.generateContent({
          model,
          config,
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        });
        break; // Success, exit loop
      } catch (error) {
        if (error.status === 503 && retries > 1) {
          console.warn(`Gemini API overloaded, retrying... (${4 - retries}/3)`);
          await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
          retries--;
        } else {
          throw error; // Re-throw if not 503 or out of retries
        }
      }
    }

    const reply =
      response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't find an answer in the CV.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("❌ Gemini API error:", error);

    // Provide user-friendly error messages
    let userMessage = "Sorry, I'm having trouble connecting right now. Please try again later.";
    if (error.status === 503) {
      userMessage = "The AI service is temporarily overloaded. Please try again in a few moments.";
    } else if (error.status === 429) {
      userMessage = "Too many requests. Please wait a moment before trying again.";
    }

    // Always return JSON even on error
    return res.status(500).json({
      reply: userMessage,
      error: error.message,
    });
  }
}
