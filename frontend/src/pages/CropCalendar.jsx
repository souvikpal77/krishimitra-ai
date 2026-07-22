export default function CropCalendar() {
  const calendar = [
    { month: "January", crops: "Wheat, Mustard, Potato" },
    { month: "February", crops: "Potato, Vegetables" },
    { month: "March", crops: "Maize, Groundnut" },
    { month: "April", crops: "Cotton, Sugarcane" },
    { month: "May", crops: "Rice Nursery, Vegetables" },
    { month: "June", crops: "Rice, Cotton, Maize" },
    { month: "July", crops: "Rice, Jute, Soybean" },
    { month: "August", crops: "Rice, Groundnut" },
    { month: "September", crops: "Vegetables, Maize" },
    { month: "October", crops: "Wheat Preparation, Mustard" },
    { month: "November", crops: "Wheat, Gram, Mustard" },
    { month: "December", crops: "Potato, Peas, Gram" },
  ];

  return (
    <div className="min-h-screen bg-[#07120A] text-white px-6 py-10">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-3 text-4xl font-bold text-green-400">
          📅 Crop Calendar
        </h1>

        <p className="mb-8 text-slate-400">
          Explore the recommended crops for each month of the year.
        </p>

        <div className="overflow-hidden rounded-2xl border border-green-500/20 bg-[#13241A] shadow-xl">

          <table className="w-full">

            <thead className="bg-green-600">
              <tr>
                <th className="px-6 py-4 text-left">Month</th>
                <th className="px-6 py-4 text-left">
                  Recommended Crops
                </th>
              </tr>
            </thead>

            <tbody>
              {calendar.map((item) => (
                <tr
                  key={item.month}
                  className="border-t border-white/10 hover:bg-white/5"
                >
                  <td className="px-6 py-4 font-semibold">
                    {item.month}
                  </td>

                  <td className="px-6 py-4 text-slate-300">
                    {item.crops}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}