import {
  Leaf,
  Camera,
  Languages,
  Mic,
  Brain,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Camera size={30} className="text-green-400" />,
    title: "AI Crop Diagnosis",
    description:
      "Upload a crop image and instantly identify diseases with AI-powered analysis.",
  },
  {
    icon: <Brain size={30} className="text-green-400" />,
    title: "Smart Farming Advice",
    description:
      "Receive personalized recommendations for irrigation, fertilizers, and crop care.",
  },
  {
    icon: <Languages size={30} className="text-green-400" />,
    title: "Multilingual Support",
    description:
      "Interact in English, Hindi, Bengali, and more regional languages.",
  },
  {
    icon: <Mic size={30} className="text-green-400" />,
    title: "Voice Assistant",
    description:
      "Speak naturally and get farming guidance without typing.",
  },
  {
    icon: <Leaf size={30} className="text-green-400" />,
    title: "Healthy Crop Monitoring",
    description:
      "Track crop health and detect problems before they become serious.",
  },
  {
    icon: <ShieldCheck size={30} className="text-green-400" />,
    title: "Reliable AI",
    description:
      "Built with Google Gemini to provide fast and intelligent agricultural assistance.",
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
            Everything Farmers Need,
            <span className="text-green-400"> Powered by AI</span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">
            KrishiMitra AI combines Google's Gemini AI with agriculture-focused
            intelligence to support farmers in making informed decisions.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-500/40"
            >
              <div className="mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}