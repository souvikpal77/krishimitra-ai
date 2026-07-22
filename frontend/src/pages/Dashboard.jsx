import { Link } from "react-router-dom";
import {
  CloudSun,
  MessageSquare,
  Bug,
  Sprout,
  CalendarDays,
  FileText,
  TrendingUp,
  Leaf,
} from "lucide-react";

const cards = [
  {
    title: "AI Chat",
    icon: <MessageSquare size={34} />,
    color: "from-green-500 to-emerald-600",
    link: "/chat",
  },
  {
    title: "Disease Detection",
    icon: <Bug size={34} />,
    color: "from-red-500 to-orange-500",
    link: "/disease",
  },
  {
    title: "Crop Recommendation",
    icon: <Sprout size={34} />,
    color: "from-lime-500 to-green-500",
    link: "/crop-recommendation",
  },
  {
    title: "Weather",
    icon: <CloudSun size={34} />,
    color: "from-sky-500 to-cyan-500",
    link: "/weather",
  },
  {
    title: "Crop Calendar",
    icon: <CalendarDays size={34} />,
    color: "from-yellow-500 to-orange-500",
    link: "/crop-calendar",
  },
  {
    title: "AI Reports",
    icon: <FileText size={34} />,
    color: "from-purple-500 to-pink-500",
    link: "/crop-recommendation",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#07120A] text-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <h1 className="text-5xl font-black">
          🌾 Farmer Dashboard
        </h1>

        <p className="mt-3 text-slate-400">
          Welcome to KrishiMitra AI.
          Manage all farming tools from one place.
        </p>

        {/* Cards */}

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {cards.map((card) => (

            <Link
              key={card.title}
              to={card.link}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-green-500/40"
            >

              <div
                className={`mb-6 inline-flex rounded-2xl bg-gradient-to-r ${card.color} p-5`}
              >
                {card.icon}
              </div>

              <h2 className="text-2xl font-bold">
                {card.title}
              </h2>

              <p className="mt-3 text-slate-400">
                Open {card.title}
              </p>

            </Link>

          ))}

        </div>

        {/* Stats */}

        <div className="mt-14 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl bg-[#13241A] p-8">

            <TrendingUp
              className="mb-3 text-green-400"
              size={35}
            />

            <h2 className="text-4xl font-black">
              250+
            </h2>

            <p className="mt-2 text-slate-400">
              AI Requests
            </p>

          </div>

          <div className="rounded-3xl bg-[#13241A] p-8">

            <Leaf
              className="mb-3 text-green-400"
              size={35}
            />

            <h2 className="text-4xl font-black">
              150+
            </h2>

            <p className="mt-2 text-slate-400">
              Crop Suggestions
            </p>

          </div>

          <div className="rounded-3xl bg-[#13241A] p-8">

            <Bug
              className="mb-3 text-green-400"
              size={35}
            />

            <h2 className="text-4xl font-black">
              120+
            </h2>

            <p className="mt-2 text-slate-400">
              Disease Scans
            </p>

          </div>

          <div className="rounded-3xl bg-[#13241A] p-8">

            <FileText
              className="mb-3 text-green-400"
              size={35}
            />

            <h2 className="text-4xl font-black">
              Unlimited
            </h2>

            <p className="mt-2 text-slate-400">
              PDF Reports
            </p>

          </div>

        </div>

        {/* Farming Tip */}

        <div className="mt-14 rounded-3xl border border-green-500/20 bg-[#13241A] p-8">

          <h2 className="text-3xl font-bold text-green-400">
            🌱 Today's Farming Tip
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Water crops early in the morning or late in the evening.
            This reduces evaporation, improves water absorption,
            and promotes healthier plant growth.
          </p>

        </div>

      </div>

    </div>
  );
}