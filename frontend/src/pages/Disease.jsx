import { useState } from "react";
import imageCompression from "browser-image-compression";

import { Upload, Loader2 } from "lucide-react";

import { askGemini } from "../services/gemini";
import DiagnosisCard from "../components/DiagnosisCard";

export default function Disease() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [loading, setLoading] = useState(false);

  const [diagnosis, setDiagnosis] = useState("");

  async function handleImage(e) {
    const file = e.target.files[0];

    if (!file) return;

    const compressed = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1200,
    });

    setImage(compressed);

    setPreview(URL.createObjectURL(compressed));

    setDiagnosis("");
  }

  async function analyzeCrop() {
    if (!image) return;

    setLoading(true);

    try {
      const base64 = await fileToBase64(image);

      const imagePart = {
        inlineData: {
          mimeType: image.type,
          data: base64,
        },
      };

      const reply = await askGemini(
        "Analyze this crop image.",
        imagePart
      );

      setDiagnosis(reply);
    } catch (err) {
      console.error(err);

      setDiagnosis(
        "❌ Unable to analyze the image."
      );
    }

    setLoading(false);
  }

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result.split(",")[1]);
      };

      reader.onerror = reject;
    });
  }
    return (
    <div className="min-h-screen bg-[#07120A] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-36 pb-10">

        <h1 className="text-5xl font-black">
          🦠 AI Disease Detection
        </h1>

        <p className="mt-3 text-slate-400">
          Upload a crop image and let Gemini AI identify diseases,
          nutrient deficiencies, and provide treatment suggestions.
        </p>

        {/* Upload Card */}

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

          <label
            htmlFor="image"
            className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-green-500/40 p-12 transition hover:border-green-400"
          >

            <Upload size={60} className="mb-5 text-green-400" />

            <h2 className="text-2xl font-bold">
              Upload Crop Image
            </h2>

            <p className="mt-2 text-slate-400">
              JPG, PNG or JPEG
            </p>

          </label>

          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="hidden"
          />

        </div>

        {/* Preview */}

        {preview && (

          <div className="mt-8">

            <img
              src={preview}
              alt="Crop Preview"
              className="mx-auto max-h-[450px] rounded-3xl border border-green-500/20"
            />

            <div className="mt-8 flex justify-center">

              <button
                onClick={analyzeCrop}
                disabled={loading}
                className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-lg font-semibold transition hover:scale-105 disabled:opacity-60"
              >

                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={20} />
                    Analyzing...
                  </span>
                ) : (
                  "🤖 Analyze Disease"
                )}

              </button>

            </div>

          </div>

        )}

        {/* Result */}

        {diagnosis && (
          <DiagnosisCard text={diagnosis} />
        )}

      </div>
    </div>
  );
}