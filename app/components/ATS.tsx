export default function ATS({
  score,
  suggestions,
}: {
  score: number;
  suggestions: { type: "good" | "improve"; tip: string }[];
}) {
  let gradient_color =
    score >= 70
      ? "from-green-100"
      : score >= 50
        ? "from-blue-100"
        : "from-red-100";
  return (
    <div
      className={` rounded-2xl shadow-md w-full bg-gradient-to-b ${gradient_color} to-light-blue-100 flex flex-col gap-4 p-5`}
    >
      <div className="flex flex-row gap-4 items-center">
        <img
          src={
            score >= 70
              ? "/icons/ats-good.svg"
              : score >= 50
                ? "/icons/ats-warning.svg"
                : "/icons/ats-bad.svg"
          }
          alt="ATS"
          className="w-10 h-10"
        />
        <p className="text-2xl font-semibold">ATS Score - {score}/100</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xl">
          How well does your resume pass through Applicant Tracking Systems
          (ATS)?
        </p>

        <p className="text-lg text-gray-500">
          Your resume was scanned like an employer would. Here's how you
          performed:
        </p>

        {suggestions.map((suggestion, index) => (
          <div className="flex flex-row gap-2 items-center" key={index}>
            <img
              src={
                suggestion.type === "good"
                  ? "/icons/check.svg"
                  : "/icons/warning.svg"
              }
            />
            <p>{suggestion.tip}</p>
          </div>
        ))}
        <p className="text-lg text-gray-500">
          Want a better score ? Improve your resume by applying the tips listed
          below.
        </p>
      </div>
    </div>
  );
}
