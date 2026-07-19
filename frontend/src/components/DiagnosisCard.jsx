import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { jsPDF } from "jspdf";
import {
  Leaf,
  ShieldCheck,
  AlertTriangle,
  Stethoscope,
  Copy,
  Check,
  Download,
} from "lucide-react";

export default function DiagnosisCard({ text }) {
  const [copied, setCopied] =useState(false);

  async function copyText() {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function downloadPDF() {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("KrishiMitra AI Diagnosis Report", 15, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    const lines = doc.splitTextToSize(text, 180);

    doc.text(lines, 15, 35);

    doc.save("KrishiMitra_Diagnosis.pdf");
  }

  return (
    <div className="mt-5 overflow-hidden rounded-3xl border border-green-500/20 bg-[#0E1C12] shadow-xl">

      <div className="flex items-center justify-between border-b border-green-500/20 bg-gradient-to-r from-green-700 to-emerald-600 px-6 py-4">

        <div className="flex items-center gap-3">
          <Leaf size={28} />

          <div>
            <h2 className="text-2xl font-bold">
              AI Crop Diagnosis
            </h2>

            <p className="text-sm text-green-100">
              Powered by Gemini Vision
            </p>
          </div>
        </div>

        <div className="flex gap-3">

          <button
            onClick={copyText}
            className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20"
          >
            {copied ? (
              <>
                <Check size={18} />
                Copied
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy
              </>
            )}
          </button>

          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 hover:bg-green-700"
          >
            <Download size={18} />
            PDF
          </button>

        </div>

      </div>

      <div className="space-y-6 p-6">

        <div className="flex items-center gap-2 text-green-400">
          <Stethoscope size={20} />
          <h3 className="text-lg font-bold">
            Diagnosis Report
          </h3>
        </div>

        <div className="prose prose-invert max-w-none prose-headings:text-green-300 prose-p:text-slate-200 prose-li:marker:text-green-400">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {text}
          </ReactMarkdown>
        </div>

        <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4">

          <div className="mb-2 flex items-center gap-2 font-semibold text-yellow-300">
            <AlertTriangle size={18} />
            AI Disclaimer
          </div>

          <p className="text-sm text-slate-300">
            This diagnosis is AI-generated from the uploaded image.
            Please verify important farming decisions with your
            nearest Krishi Vigyan Kendra (KVK) or Agriculture Officer.
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">

          <ShieldCheck
            size={22}
            className="text-green-400"
          />

          <p className="text-sm">
            Eco-friendly recommendations are prioritized before chemical treatments.
          </p>

        </div>

      </div>

    </div>
  );
}