import { Link } from "react-router-dom";
import {
  CloudSun,
  Leaf,
  Sprout,
  MessageCircle,
  Camera,
  BarChart3,
} from "lucide-react";

export default function Dashboard() {
  const cards = [
    {
      icon: <CloudSun size={34} />,
      title: "Weather",
      value: "Live Weather",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Leaf size={34} />,
      title: "Soil",
      value: "Alluvial",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Sprout size={34} />,
      title: "Season",
      value: "Kharif",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07120A] text-white px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-10 text-4xl font-bold">
          🌾 Farmer Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-3">

          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div
                className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${card.color} p-3`}
              >
                {card.icon}
              </div>

              <h2 className="text-xl font-semibold">
                {card.title}
              </h2>

              <p className="mt-2 text-slate-300">
                {card.value}
              </p>
            </div>
          ))}

        </div>

        <h2 className="mt-12 mb-6 text-2xl font-bold">
          🚀 Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <Link
            to="/chat"
            className="rounded-2xl border border-green-500/20 bg-[#13241A] p-6 transition hover:scale-105"
          >
            <MessageCircle size={40} className="text-green-400" />
            <h3 className="mt-4 text-xl font-semibold">
              AI Chat
            </h3>
          </Link>

          <Link
            to="/chat"
            className="rounded-2xl border border-green-500/20 bg-[#13241A] p-6 transition hover:scale-105"
          >
            <Camera size={40} className="text-green-400" />
            <h3 className="mt-4 text-xl font-semibold">
              Crop Diagnosis
            </h3>
          </Link>

          <Link
            to="/crop-recommendation"
            className="rounded-2xl border border-green-500/20 bg-[#13241A] p-6 transition hover:scale-105"
          >
            <BarChart3 size={40} className="text-green-400" />
            <h3 className="mt-4 text-xl font-semibold">
              Crop Recommendation
            </h3>
          </Link>

        </div>
      </div>
    </div>
  );
}