import { Mic } from "lucide-react";

export default function VoiceButton({
  listening,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-4 transition ${
        listening
          ? "bg-red-600 animate-pulse"
          : "bg-green-600 hover:bg-green-700"
      }`}
    >
      <Mic size={22} />
    </button>
  );
}