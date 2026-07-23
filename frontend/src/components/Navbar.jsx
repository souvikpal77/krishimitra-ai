import { Sprout } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-7 py-4 backdrop-blur-2xl">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-600">
              <Sprout className="text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                KrishiMitra AI
              </h1>

              <p className="text-xs text-slate-400">
                AI Farming Companion
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 md:flex text-slate-300">

            <Link
              to="/"
              className="transition hover:text-green-400"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              className="transition hover:text-green-400"
            >
              Dashboard
            </Link>

            <Link
              to="/chat"
              className="transition hover:text-green-400"
            >
              AI Chat
            </Link>

            <Link
              to="/weather"
              className="transition hover:text-green-400"
            >
              Weather
            </Link>

            <Link
              to="/crop-recommendation"
              className="transition hover:text-green-400"
            >
              Crop AI
            </Link>

            <Link
              to="/crop-calendar"
              className="transition hover:text-green-400"
            >
              Calendar
            </Link>

            <Link
              to="/disease"
              className="transition hover:text-green-400"
            >
              Disease
            </Link>

          </nav>

          {/* CTA Button */}
          <Link
            to="/dashboard"
            className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Open Dashboard
          </Link>

        </div>
      </div>
    </header>
  );
}