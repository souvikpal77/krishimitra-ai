import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const SYSTEM_PROMPT = `
You are KrishiMitra AI.

You are an expert agricultural assistant for Indian farmers.

Always:
- Give practical advice.
- Explain in simple language.
- Recommend eco-friendly solutions first.
- Suggest fertilizers only when necessary.
- If an image is provided, identify the crop if possible, detect visible diseases or deficiencies, explain your confidence, and recommend practical treatment and prevention.
`;

export async function askGemini(prompt, imagePart = null) {
  try {
    const parts = [
      {
        text: `${SYSTEM_PROMPT}\n\nFarmer Question:\n${prompt}`,
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
    console.error(error);
    return "Sorry, I couldn't generate a response right now.";
  }
}