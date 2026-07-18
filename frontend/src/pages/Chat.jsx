import { useState, useEffect, useRef } from "react";
import { askGemini } from "../services/gemini";
import ChatMessage from "../components/ChatMessage";
import SuggestedQuestions from "../components/SuggestedQuestions";
import ImageUploader from "../components/ImageUploader";

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hello! I'm KrishiMitra AI. Ask me anything about crops, farming, fertilizers, pests, irrigation, or weather.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  function handleNewChat() {
    setMessages([
      {
        role: "assistant",
        text: "👋 Hello! I'm KrishiMitra AI. Ask me anything about crops, farming, fertilizers, pests, irrigation, or weather.",
      },
    ]);
    setPrompt("");
    setSelectedImage(null);
  }

  async function handleSend() {
    if (!prompt.trim()) return;

    const question = prompt;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
      },
    ]);

    setPrompt("");
    setLoading(true);

    let imagePart = null;

    if (selectedImage) {
      const buffer = await selectedImage.arrayBuffer();
      const bytes = new Uint8Array(buffer);

      let binary = "";
      bytes.forEach((b) => {
        binary += String.fromCharCode(b);
      });

      imagePart = {
        inlineData: {
          mimeType: selectedImage.type,
          data: btoa(binary),
        },
      };
    }

    const reply = await askGemini(question, imagePart);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: reply,
      },
    ]);

    setLoading(false);
    setSelectedImage(null);
  }

  return (
    <div className="min-h-screen bg-[#07120A] text-white">
      <div className="mx-auto max-w-4xl px-6 py-10">

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            🌾 KrishiMitra AI
          </h1>

          <button
            onClick={handleNewChat}
            className="rounded-xl bg-red-500 px-5 py-2 font-semibold transition hover:bg-red-600"
          >
            New Chat
          </button>
        </div>

        <SuggestedQuestions
          onSelect={(question) => setPrompt(question)}
        />

        <ImageUploader
          onImageSelect={setSelectedImage}
        />

        <div className="mb-6 h-[500px] overflow-y-auto rounded-2xl border border-white/10 bg-white/5 p-6">

          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              text={message.text}
            />
          ))}

          {loading && (
            <ChatMessage
              role="assistant"
              text="🌱 Thinking..."
            />
          )}

          <div ref={chatEndRef}></div>

        </div>

        <div className="flex gap-4">

          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            placeholder="Ask about crops or upload a leaf image..."
            className="flex-1 rounded-xl border border-white/10 bg-white/10 px-5 py-4 outline-none focus:border-green-500"
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 font-semibold transition hover:scale-105 disabled:opacity-50"
          >
            Send
          </button>

        </div>

      </div>
    </div>
  );
}