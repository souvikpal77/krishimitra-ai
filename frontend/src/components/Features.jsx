import {
  Camera,
  Brain,
  Languages,
  Mic,
  CloudSun,
  Sprout,
  CalendarDays,
  FileText,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Camera size={30} className="text-green-400" />,
    title: "AI Disease Detection",
    description:
      "Upload a crop image and instantly identify plant diseases with AI-powered analysis and treatment suggestions.",
  },
  {
    icon: <Brain size={30} className="text-green-400" />,
    title: "AI Crop Recommendation",
    description:
      "Get intelligent crop recommendations based on your state, soil type, and farming season.",
  },
  {
    icon: <CloudSun size={30} className="text-green-400" />,
    title: "Weather Forecast",
    description:
      "Access weather insights to plan irrigation, sowing, and harvesting more effectively.",
  },
  {
    icon: <CalendarDays size={30} className="text-green-400" />,
    title: "Crop Calendar",
    description:
      "Know the best crops to cultivate every month with a smart seasonal farming calendar.",
  },
  {
    icon: <FileText size={30} className="text-green-400" />,
    title: "PDF Report Export",
    description:
      "Download professional AI-generated farming recommendations as PDF reports for future reference.",
  },
  {
    icon: <Languages size={30} className="text-green-400" />,
    title: "Multilingual Support",
    description:
      "Interact with KrishiMitra AI in English, Hindi, Bengali, and other regional languages.",
  },
  {
    icon: <Mic size={30} className="text-green-400" />,
    title: "Voice Assistant",
    description:
      "Speak naturally instead of typing to receive AI-powered agricultural guidance.",
  },
  {
    icon: <Sprout size={30} className="text-green-400" />,
    title: "Smart Farming Guidance",
    description:
      "Receive practical recommendations for irrigation, fertilizers, crop health, and sustainable farming.",
  },
  {
    icon: <ShieldCheck size={30} className="text-green-400" />,
    title: "Powered by Google Gemini",
    description:
      "Built using Google's Gemini AI to deliver fast, reliable, and intelligent agricultural assistance.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#07120A] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-green-400 font-semibold uppercase tracking-widest">
            FEATURES
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            Smart Agriculture
            <span className="text-green-400"> Powered by AI</span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">
            KrishiMitra AI combines Google Gemini with modern agricultural
            intelligence to help farmers make smarter, data-driven decisions.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-500/40"
            >
              <div className="mb-6">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}