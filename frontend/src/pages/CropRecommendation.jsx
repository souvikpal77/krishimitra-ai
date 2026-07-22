import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { askGemini } from "../services/gemini";

export default function CropRecommendation() {
  const [state, setState] = useState("West Bengal");
  const [soil, setSoil] = useState("Alluvial");
  const [season, setSeason] = useState("Kharif");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleRecommendation() {
    setLoading(true);

    const prompt = `
Reply ONLY in English.

You are an expert agricultural advisor for Indian farmers.

State: ${state}
Soil Type: ${soil}
Season: ${season}

Recommend the best crops.

Return ONLY in this format:

# 🌾 Recommended Crops

- Crop 1
- Crop 2
- Crop 3

# 💧 Water Requirement

...

# 🌿 Fertilizer Advice

...

# 📈 Expected Yield

...

# ⚠️ Precautions

...
`;

    const reply = await askGemini(prompt);

    setResult(reply);

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#07120A] text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <h1 className="mb-8 text-4xl font-bold">
          🌾 AI Crop Recommendation
        </h1>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

          <div className="grid gap-6 md:grid-cols-3">

            <div>
              <label className="mb-2 block font-semibold">
                🌍 State
              </label>

              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full rounded-xl border border-green-500/30 bg-[#1B2A1F] px-4 py-3 text-white"
              >
                <option>West Bengal</option>
                <option>Bihar</option>
                <option>Odisha</option>
                <option>Assam</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                🌱 Soil Type
              </label>

              <select
                value={soil}
                onChange={(e) => setSoil(e.target.value)}
                className="w-full rounded-xl border border-green-500/30 bg-[#1B2A1F] px-4 py-3 text-white"
              >
                <option>Alluvial</option>
                <option>Black</option>
                <option>Red</option>
                <option>Clay</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                🌦 Season
              </label>

              <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
                className="w-full rounded-xl border border-green-500/30 bg-[#1B2A1F] px-4 py-3 text-white"
              >
                <option>Kharif</option>
                <option>Rabi</option>
                <option>Zaid</option>
              </select>
            </div>

          </div>

          <button
            onClick={handleRecommendation}
            disabled={loading}
            className="mt-8 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 font-semibold hover:scale-105 disabled:opacity-50"
          >
            {loading ? "🤖 Thinking..." : "🤖 Recommend Crops"}
          </button>

        </div>

        {result && (
          <div className="mt-8 rounded-2xl border border-green-500/20 bg-[#13241A] p-8 shadow-xl">
            <h2 className="mb-6 text-3xl font-bold text-green-400">
              🌾 AI Recommendation
            </h2>

            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}