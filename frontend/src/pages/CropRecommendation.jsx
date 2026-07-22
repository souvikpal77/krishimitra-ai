import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { generatePDF } from "../utils/pdfGenerator";
import { askGemini } from "../services/gemini";
import cropData from "../data/cropData";

export default function CropRecommendation() {
  const [state, setState] = useState("West Bengal");
  const [soil, setSoil] = useState("Alluvial");
  const [season, setSeason] = useState("Kharif");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleRecommendation() {
    setLoading(true);

    const matched = cropData.find(
      (item) =>
        item.state === state &&
        item.soil === soil &&
        item.season === season
    );

    if (!matched) {
      setResult(
        "❌ No crop recommendation found for the selected State, Soil Type and Season."
      );
      setLoading(false);
      return;
    }

    const prompt = `
Reply ONLY in English.

You are KrishiMitra AI, an expert agricultural assistant.

Recommended crops:
${matched.crops.join(", ")}

State: ${state}
Soil Type: ${soil}
Season: ${season}

Explain using this EXACT markdown format.

# 🌾 Recommended Crops

- ${matched.crops.join("\n- ")}

# ✅ Why These Crops?

Explain why these crops are suitable for the selected state, soil and season.

# 💧 Irrigation

Provide practical irrigation advice.

# 🌿 Fertilizer Advice

Prefer organic fertilizers first, then mention chemical fertilizers if needed.

# 📈 Expected Yield

Give a general expected yield.

# ⚠️ Precautions

Mention important precautions for farmers.
`;

    try {
      const reply = await askGemini(prompt);
      setResult(reply);
    } catch (error) {
      console.error(error);
      setResult(
        "❌ Unable to generate recommendation. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleDownloadPDF() {
    if (!result) return;

    const pdfContent = `
State: ${state}

Soil Type: ${soil}

Season: ${season}

----------------------------------------

${result.replace(/[#*`>-]/g, "")}
`;

    generatePDF("Crop Recommendation Report", pdfContent);
  }

  return (
  <div className="min-h-screen bg-[#07120A] text-white">
    <div className="mx-auto max-w-5xl px-6 py-10">

      <h1 className="mb-8 text-4xl font-bold">
        🌾 AI Crop Recommendation
      </h1>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

        <div className="grid gap-6 md:grid-cols-3">

          {/* State */}
          <div>
            <label className="mb-2 block font-semibold">
              🌍 State
            </label>

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full rounded-xl border border-green-500/30 bg-[#1B2A1F] px-4 py-3 text-white outline-none focus:border-green-500"
            >
              <option>West Bengal</option>
              <option>Bihar</option>
              <option>Jharkhand</option>
              <option>Odisha</option>

              <option>Assam</option>
              <option>Tripura</option>
              <option>Meghalaya</option>
              <option>Manipur</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Sikkim</option>
              <option>Arunachal Pradesh</option>

              <option>Punjab</option>
              <option>Haryana</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>Himachal Pradesh</option>
              <option>Jammu and Kashmir</option>
              <option>Delhi</option>
              <option>Chandigarh</option>

              <option>Maharashtra</option>
              <option>Gujarat</option>
              <option>Rajasthan</option>
              <option>Goa</option>

              <option>Tamil Nadu</option>
              <option>Kerala</option>
              <option>Karnataka</option>
              <option>Andhra Pradesh</option>
              <option>Telangana</option>
            </select>
          </div>

          {/* Soil */}
          <div>
            <label className="mb-2 block font-semibold">
              🌱 Soil Type
            </label>

            <select
              value={soil}
              onChange={(e) => setSoil(e.target.value)}
              className="w-full rounded-xl border border-green-500/30 bg-[#1B2A1F] px-4 py-3 text-white outline-none focus:border-green-500"
            >
              <option value="Alluvial">Alluvial</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="Clay">Clay</option>
              <option value="Loamy">Loamy</option>
              <option value="Laterite">Laterite</option>
              <option value="Sandy">Sandy</option>
              <option value="Mountain">Mountain</option>
            </select>
          </div>

          {/* Season */}
          <div>
            <label className="mb-2 block font-semibold">
              🌦 Season
            </label>

            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="w-full rounded-xl border border-green-500/30 bg-[#1B2A1F] px-4 py-3 text-white outline-none focus:border-green-500"
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
          className="mt-8 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 font-semibold transition hover:scale-105 disabled:opacity-50"
        >
          {loading ? "🤖 Thinking..." : "🤖 Recommend Crops"}
        </button>

      </div>
              {result && (
          <div className="mt-8 rounded-2xl border border-green-500/20 bg-[#13241A] p-8 shadow-xl">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-3xl font-bold text-green-400">
                🌾 AI Recommendation
              </h2>

              <button
                onClick={handleDownloadPDF}
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
              >
                📄 Download PDF
              </button>

            </div>

            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}