import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`mb-5 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-5 py-4 shadow-lg ${
          isUser
            ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
            : "border border-white/10 bg-white/5 backdrop-blur-xl text-slate-200"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{text}</p>
        ) : (
          <div className="prose prose-invert max-w-none prose-headings:text-green-400 prose-strong:text-white prose-li:marker:text-green-400">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {text}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}