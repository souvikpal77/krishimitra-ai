import {
  Leaf,
  CircleCheckBig,
  Sparkles,
  ChartNoAxesColumn,
} from "lucide-react";

export default function AIDashboard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Live AI Analysis
        </h2>

        <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-2 text-green-400">

          <Sparkles size={16} />

          Gemini AI

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-green-500/10 bg-[#132118] p-6">

        <div className="flex items-center gap-3">

          <Leaf className="text-green-400" />

          <h3 className="text-lg font-semibold text-white">

            Tomato Leaf Analysis

          </h3>

        </div>

        <div className="mt-8 space-y-5">

          <div className="flex justify-between">

            <span className="text-slate-400">

              Disease

            </span>

            <span className="text-white">

              Early Blight

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-slate-400">

              Confidence

            </span>

            <span className="font-bold text-green-400">

              96%

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-slate-400">

              Recommendation

            </span>

            <span className="flex items-center gap-2 text-green-400">

              <CircleCheckBig size={18} />

              Ready

            </span>

          </div>

        </div>

      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="rounded-xl bg-white/5 p-4 text-center">

          <h3 className="text-2xl font-bold text-green-400">

            23

          </h3>

          <p className="mt-2 text-xs text-slate-400">

            Images

          </p>

        </div>

        <div className="rounded-xl bg-white/5 p-4 text-center">

          <h3 className="text-2xl font-bold text-green-400">

            8

          </h3>

          <p className="mt-2 text-xs text-slate-400">

            Languages

          </p>

        </div>

        <div className="rounded-xl bg-white/5 p-4 text-center">

          <ChartNoAxesColumn className="mx-auto mb-2 text-green-400" />

          <p className="text-xs text-slate-400">

            AI Insights

          </p>

        </div>

      </div>

    </div>
  );
}