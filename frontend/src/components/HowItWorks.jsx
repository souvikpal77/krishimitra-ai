import { Upload, Brain, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: <Upload size={32} className="text-green-400" />,
    title: "Upload",
    description:
      "Upload a photo of your crop or ask your farming question.",
  },
  {
    icon: <Brain size={32} className="text-green-400" />,
    title: "Gemini AI Analysis",
    description:
      "Google Gemini analyzes the image and understands the farming context.",
  },
  {
    icon: <BadgeCheck size={32} className="text-green-400" />,
    title: "Get Smart Recommendations",
    description:
      "Receive disease detection, prevention methods, and farming advice instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#08140C] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <span className="text-green-400 uppercase tracking-[0.3em] text-sm">
            HOW IT WORKS
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            Simple.
            <span className="text-green-400"> Intelligent.</span>
            Effective.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg">
            Three simple steps to help farmers identify crop diseases
            and receive AI-powered agricultural guidance.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl hover:border-green-500/40 transition duration-300 hover:-translate-y-2"
            >
              <div className="mb-8">{step.icon}</div>

              <h3 className="text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {step.description}
              </p>

              <div className="mt-8 text-green-400 font-bold">
                Step {index + 1}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}