import { Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050B07]">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-green-400">Krishi</span>Mitra AI
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              AI-powered farming assistant built with Google Gemini to help
              farmers detect crop diseases and improve agricultural productivity.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Home</li>
              <li>Features</li>
              <li>How It Works</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>

            <div className="flex items-center gap-3 text-slate-400">
              <Mail size={20} />
              <span>souvikpal.dev@gmail.com</span>
            </div>

          </div>

        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">

          <p>© 2026 KrishiMitra AI. All Rights Reserved.</p>

          <div className="flex items-center gap-2">
            Built with
            <Heart size={16} className="text-red-500" />
            React + Google Gemini
          </div>

        </div>

      </div>
    </footer>
  );
}