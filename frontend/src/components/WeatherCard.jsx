export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="mb-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">

      <h2 className="mb-4 text-2xl font-bold">
        🌦️ Current Weather
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <p className="text-slate-400">📍 Location</p>
          <p className="font-semibold">
            {weather.name}
          </p>
        </div>

        <div>
          <p className="text-slate-400">🌡 Temperature</p>
          <p className="font-semibold">
            {weather.main.temp} °C
          </p>
        </div>

        <div>
          <p className="text-slate-400">💧 Humidity</p>
          <p className="font-semibold">
            {weather.main.humidity}%
          </p>
        </div>

        <div>
          <p className="text-slate-400">🌬 Wind</p>
          <p className="font-semibold">
            {weather.wind.speed} m/s
          </p>
        </div>

        <div>
          <p className="text-slate-400">☁ Condition</p>
          <p className="font-semibold">
            {weather.weather[0].main}
          </p>
        </div>

      </div>

    </div>
  );
}