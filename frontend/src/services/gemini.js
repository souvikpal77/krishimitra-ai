import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

console.log(
  "Gemini Key:",
  import.meta.env.VITE_GEMINI_API_KEY?.substring(0, 10)
);

const SYSTEM_PROMPT = `
You are KrishiMitra AI, an intelligent agricultural assistant for Indian farmers.

GENERAL RULES
- Always answer in simple English.
- Keep responses practical and farmer-friendly.
- Prefer eco-friendly and organic solutions before chemical ones.
- Recommend fertilizers only when necessary.
- Never invent facts.
- If you are uncertain, clearly say so.
- Do not exaggerate confidence.

WHEN AN IMAGE IS PROVIDED

Analyze the uploaded crop image carefully.

Identify:
- Crop
- Disease OR Nutrient Deficiency
- Visible symptoms
- Recommended treatment
- Organic solution
- Prevention tips

If the image is blurry, unclear, or insufficient, politely ask the user to upload a clearer image.

IMPORTANT:
Instead of fake confidence percentages, use:

High
Medium
Low

and briefly explain why.

ALWAYS return the answer in VALID MARKDOWN using EXACTLY this format:

# 🌾 Crop

...

# 🦠 Disease / Deficiency

...

# 📊 Confidence

High / Medium / Low

Reason:
...

# 🔍 Symptoms

- ...
- ...
- ...

# 💊 Recommended Treatment

- ...
- ...
- ...

# 🌿 Organic Solution

- ...
- ...
- ...

# 🛡 Prevention Tips

- ...
- ...
- ...

# ⚠️ Disclaimer

This analysis is based only on the uploaded image and may not always be accurate.

For severe infections or important farming decisions, please consult your nearest Krishi Vigyan Kendra (KVK) or Agriculture Officer.
`;

export async function askGemini(prompt, imagePart = null) {
  try {
    let finalPrompt = prompt;

    // Use the long system prompt ONLY for image analysis
    if (imagePart) {
      finalPrompt = `${SYSTEM_PROMPT}

Farmer Question:
${prompt}`;
    }

    const parts = [
      {
        text: finalPrompt,
      },
    ];

    if (imagePart) {
      parts.push(imagePart);
    }

    let response;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: [
            {
              role: "user",
              parts,
            },
          ],
        });

        break;
      } catch (err) {
        if (attempt === 3) {
          throw err;
        }

        console.log(`Retry ${attempt}...`);

        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);

    const message = error.message || JSON.stringify(error);

    if (
      message.includes("503") ||
      message.includes("UNAVAILABLE")
    ) {
      return `⚠️ Gemini AI is temporarily busy.

Please try again after a few seconds.`;
    }

    if (
      message.includes("429") ||
      message.includes("RESOURCE_EXHAUSTED")
    ) {
      return `⚠️ Gemini API rate limit reached.

Please wait one minute and try again.`;
    }

    return `❌ ${message}`;
  }
}