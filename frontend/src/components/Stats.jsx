import { Users, ScanSearch, Globe, Sparkles } from "lucide-react";

const stats = [
  {
    icon: <Users size={34} className="text-green-400" />,
    number: "10K+",
    label: "Farmers Supported",
  },
  {
    icon: <ScanSearch size={34} className="text-green-400" />,
    number: "50K+",
    label: "Crop Analyses",
  },
  {
    icon: <Globe size={34} className="text-green-400" />,
    number: "8+",
    label: "Languages",
  },
  {
    icon: <Sparkles size={34} className="text-green-400" />,
    number: "24/7",
    label: "AI Availability",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#07120A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:border-green-500/40 transition duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-4xl font-black text-white">
                {item.number}
              </h2>

              <p className="mt-3 text-slate-400">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}