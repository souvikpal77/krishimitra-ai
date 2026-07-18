import { Sprout } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="mx-auto max-w-7xl px-6 pt-5">

        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl px-7 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-600">

              <Sprout className="text-white"/>

            </div>

            <div>

              <h1 className="font-bold text-xl">
                KrishiMitra AI
              </h1>

              <p className="text-xs text-slate-400">
                AI Farming Companion
              </p>

            </div>

          </div>

          <nav className="hidden md:flex gap-8 text-slate-300">

            <a className="hover:text-green-400 transition" href="#">Home</a>

            <a className="hover:text-green-400 transition" href="#">Features</a>

            <a className="hover:text-green-400 transition" href="#">About</a>

            <a className="hover:text-green-400 transition" href="#">Contact</a>

          </nav>

          <button className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-semibold hover:scale-105 transition">

            Get Started

          </button>

        </div>

      </div>

    </header>
  );
}