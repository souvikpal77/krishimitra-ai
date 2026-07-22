import ReactMarkdown from "react-markdown";
import DiagnosisCard from "./DiagnosisCard";

export default function ChatMessage({ role, text }) {
  const isUser = role === "user";

  const isDiagnosis =
    text.includes("# 🌾 Crop") ||
    text.includes("🦠 Disease") ||
    text.includes("🛡 Prevention") ||
    text.includes("💊 Recommended Treatment");

  return (
    <div
      className={`mb-6 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {isUser ? (
        <div className="max-w-[80%] rounded-2xl bg-green-600 px-5 py-4 text-white shadow-lg">
          <p>{text}</p>
        </div>
      ) : isDiagnosis ? (
        <div className="w-full">
          <DiagnosisCard text={text} />
        </div>
      ) : (
        <div className="max-w-[80%] rounded-2xl border border-green-500/20 bg-[#13241A] px-5 py-4 text-slate-100 shadow-lg">
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}