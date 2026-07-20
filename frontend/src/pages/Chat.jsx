import { useState, useEffect, useRef } from "react";
import { askGemini } from "../services/gemini";
import { getWeather } from "../services/weather";

import ChatMessage from "../components/ChatMessage";
import SuggestedQuestions from "../components/SuggestedQuestions";
import ImageUploader from "../components/ImageUploader";
import WeatherCard from "../components/WeatherCard";

export default function Chat() {
  const [prompt, setPrompt] = useState("");

  const [weather, setWeather] = useState(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hello! I'm KrishiMitra AI. Upload a crop image or ask any farming question.",
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
        text: "👋 Hello! I'm KrishiMitra AI. Upload a crop image or ask any farming question.",
      },
    ]);

    setPrompt("");

    setSelectedImage(null);

    setWeather(null);
  }
    async function handleGetWeather() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          setLoading(true);

          const data = await getWeather(
            position.coords.latitude,
            position.coords.longitude
          );

          if (data && data.main && data.weather) {
            setWeather(data);

            const weatherPrompt = `
You are KrishiMitra AI.

You are an expert agriculture assistant for Indian farmers.

Current Weather

Location: ${data.name}
Temperature: ${data.main.temp}°C
Humidity: ${data.main.humidity}%
Weather: ${data.weather[0].description}
Wind Speed: ${data.wind.speed} m/s

Based on this weather, provide practical farming advice.

Return ONLY in this format:

# 🌾 AI Farming Advice

## 🌱 Irrigation
- ...

## 💊 Pesticide Spraying
- ...

## 🌾 Crop Recommendation
- ...

## ⚠ Precautions
- ...

Keep the answer short and practical.
`;

console.log("Sending weather prompt to Gemini...");

const reply = await askGemini(weatherPrompt);

console.log("Gemini reply:", reply);
            setMessages((prev) => [
              ...prev,
              {
                role: "user",
                text: "🌦 Get farming advice based on my current weather.",
              },
              {
                role: "assistant",
                text: reply,
              },
            ]);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);

          chatEndRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }
      },
      () => {
        alert("Unable to get your location.");
      }
    );
  }
    async function handleSend() {
    if (!prompt.trim() && !selectedImage) return;

    const question =
      prompt.trim() ||
      "Analyze this crop image and identify any disease.";

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
      },
    ]);

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

    setPrompt("");

    setSelectedImage(null);

    setLoading(false);

    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-[#07120A] text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <div className="mb-8 flex items-center justify-between">

          <h1 className="text-4xl font-bold">
            🌾 KrishiMitra AI
          </h1>

          <button
            onClick={handleNewChat}
            className="rounded-xl bg-red-500 px-5 py-2 font-semibold hover:bg-red-600"
          >
            New Chat
          </button>

        </div>

        <div className="mb-6">
          <button
            onClick={handleGetWeather}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
          >
            🌦 Get My Weather
          </button>
        </div>

        <WeatherCard weather={weather} />

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
              text="🌱 Analyzing..."
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
            placeholder="Ask about crops or upload an image..."
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