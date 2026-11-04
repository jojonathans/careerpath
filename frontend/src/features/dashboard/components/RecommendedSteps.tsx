
const steps = [
  "Complete your career profile",
  "Upload your latest CV",
  "Analyze your skill gaps",
];

export default function RecommendedSteps() {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="font-semibold text-gray-800">
        Recommended Next Steps
      </h2>

      <ul className="mt-3 space-y-3 text-sm text-gray-600">
        {steps.map((step, index) => (
          <li key={index}>
            <span className="mr-2 text-blue-600">•</span>
            {step}
          </li>
        ))}
      </ul>
    </section>
  );
}
