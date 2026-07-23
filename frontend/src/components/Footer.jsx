import { Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050B07]">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-green-400">Krishi</span>Mitra AI
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              AI-powered farming assistant built with Google Gemini to help
              farmers detect crop diseases, receive crop recommendations,
              weather insights, and improve agricultural productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>🏠 Home</li>
              <li>📊 Dashboard</li>
              <li>🤖 AI Chat</li>
              <li>🌤 Weather</li>
              <li>🌾 Crop Recommendation</li>
              <li>🦠 Disease Detection</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Contact
            </h3>

            <a
              href="mailto:souvikpal.dev@gmail.com"
              className="flex items-center gap-3 text-slate-400 transition hover:text-green-400"
            >
              <Mail size={20} />
              <span>souvikpal.dev@gmail.com</span>
            </a>

            <p className="mt-5 text-slate-500">
              Made for Indian Farmers 🌾
            </p>
          </div>

        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">

          <p>© 2026 KrishiMitra AI. All Rights Reserved.</p>

          <div className="flex items-center gap-2">
            Built with
            <Heart size={16} className="text-red-500" />
            React + Google Gemini
          </div>

          <p>Version 1.0.0</p>

        </div>

      </div>
    </footer>
  );
}