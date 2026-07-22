import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import AIDashboard from "./AIDashboard";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07120A]">
      {/* Background Glow */}
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-green-500/20 blur-[170px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-[170px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 pb-24 pt-40 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300">
            🌾 Built with Google Gemini
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight">
            Grow Better
            <br />
            Crops with
            <span className="text-green-400"> AI</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            KrishiMitra AI helps farmers detect crop diseases,
            analyze crop images, receive weather-based farming advice,
            recommend suitable crops, and improve productivity using AI.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            {/* Analyze Crop */}
            <Link
              to="/chat"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold transition hover:scale-105"
            >
              Analyze Crop
              <ArrowRight size={18} />
            </Link>

            {/* Talk with AI */}
            <Link
              to="/chat"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:bg-white/10"
            >
              Talk with AI
            </Link>

            {/* Crop Recommendation */}
            <Link
              to="/crop-recommendation"
              className="rounded-xl border border-green-500/30 bg-green-500/10 px-8 py-4 text-green-300 transition hover:bg-green-500/20"
            >
              🌾 Recommend Crop
            </Link>

            {/* Dashboard */}
            <Link
              to="/dashboard"
              className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-8 py-4 text-cyan-300 transition hover:bg-cyan-500/20"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <AIDashboard />
        </motion.div>

      </div>
    </section>
  );
}