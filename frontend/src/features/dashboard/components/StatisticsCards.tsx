
const statistics = [
  {
    label: "Total Skills",
    value: "12",
    description: "Skills identified",
  },
  {
    label: "Job Matches",
    value: "08",
    description: "Matching opportunities",
  },
  {
    label: "Applications",
    value: "05",
    description: "Active applications",
  },
  {
    label: "Learning Progress",
    value: "65%",
    description: "Overall progress",
  },
];

export default function StatisticsCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {statistics.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-gray-500">
            {item.label}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-800">
            {item.value}
          </h2>

          <p className="mt-2 text-xs text-gray-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
