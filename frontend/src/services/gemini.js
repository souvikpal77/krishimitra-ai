import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const SYSTEM_PROMPT = `
You are KrishiMitra AI, an AI farming assistant for Indian farmers.

Rules:
- Answer in simple language.
- Give practical farming advice.
- Prefer eco-friendly solutions.
- Recommend fertilizers only if needed.
- If an image is provided:
  - Identify the crop.
  - Detect diseases or nutrient deficiencies.
  - Mention confidence.
  - Explain symptoms.
  - Recommend treatment.
  - Suggest organic alternatives.
  - Give prevention tips.
`;

export async function askGemini(prompt, imagePart = null) {
  try {
    const parts = [
      {
        text: `${SYSTEM_PROMPT}

Farmer Question:
${prompt}`,
      },
    ];

    if (imagePart) {
      parts.push(imagePart);
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          role: "user",
          parts,
        },
      ],
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return `Error: ${error.message}`;
  }
}