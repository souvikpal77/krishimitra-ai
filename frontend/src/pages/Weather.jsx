import { useState } from "react";
import { Search } from "lucide-react";

import WeatherCard from "../components/WeatherCard";
import { getWeather } from "../services/weather";

export default function Weather() {
  const [city, setCity] = useState("Kolkata");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    setLoading(true);
    setError("");

    const data = await getWeather(city);

    if (!data) {
      setError("Unable to fetch weather data.");
      setWeather(null);
    } else {
      setWeather(data);
    }

    setLoading(false);
  }

  function getAdvice() {
    if (!weather) return "";

    const temp = weather.main.temp;

    if (temp >= 35)
      return "☀️ High temperature detected. Irrigate crops during early morning or evening.";

    if (temp <= 15)
      return "🥶 Low temperature. Protect sensitive crops from cold conditions.";

    if (weather.weather[0].main === "Rain")
      return "🌧 Rain expected. Reduce irrigation and ensure proper field drainage.";

    return "🌱 Weather conditions are favorable for regular farming activities.";
  }

  return (
    <div className="min-h-screen bg-[#07120A] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-36 pb-10">

        <h1 className="text-5xl font-black">
          🌤 Weather Dashboard
        </h1>

        <p className="mt-3 text-slate-400">
          Check live weather conditions and receive AI-powered farming advice.
        </p>

        {/* Search */}

        <div className="mt-10 flex gap-4">

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City..."
            className="flex-1 rounded-xl border border-green-500/30 bg-[#13241A] px-5 py-4 outline-none focus:border-green-500"
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 font-semibold transition hover:scale-105"
          >
            <Search size={20} />
            {loading ? "Loading..." : "Search"}
          </button>

        </div>

        {error && (
          <div className="mt-6 rounded-xl bg-red-500/20 p-4 text-red-300">
            {error}
          </div>
        )}

        <div className="mt-10">

          <WeatherCard weather={weather} />

        </div>

        {weather && (
          <div className="mt-8 rounded-2xl border border-green-500/20 bg-[#13241A] p-8">

            <h2 className="mb-4 text-3xl font-bold text-green-400">
              🤖 AI Farming Advice
            </h2>

            <p className="text-lg leading-8 text-slate-300">
              {getAdvice()}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}