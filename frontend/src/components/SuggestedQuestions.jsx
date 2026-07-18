const questions = [
  "🌾 How do I increase rice yield?",
  "🍅 Best fertilizer for tomatoes?",
  "🐛 How to control stem borer?",
  "💧 How often should I irrigate paddy?",
  "🌱 Organic farming tips",
  "🌦️ Which crop is best this season?",
];

export default function SuggestedQuestions({ onSelect }) {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {questions.map((question, index) => (
        <button
          key={index}
          onClick={() => onSelect(question)}
          className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300 transition hover:bg-green-500 hover:text-white"
        >
          {question}
        </button>
      ))}
    </div>
  );
}