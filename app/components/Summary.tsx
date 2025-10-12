import type { Feedback } from "types";
import ScoreGauge from "./ScoreGauge";
import ScoreBadge from "./ScoreBadge";

const Categoroy = ({ title, score }: { title: string; score: number }) => {
  const textColor =
    score >= 70
      ? "text-green-600"
      : score >= 49
        ? "text-blue-600"
        : "text-red-600";
  return (
    <div className="resume-summary">
      <div className="category ">
        <p className="text-2xl">{title}</p>
        <ScoreBadge score={score} />
      </div>

      <p className="text-2xl">
        <span className={textColor}>{score}</span> / 100
      </p>
    </div>
  );
};
export default function Summary({ feedback }: { feedback: Feedback }) {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGauge score={feedback.overallScore} />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Your Resume</h2>
          <p className="text-sm text-gray-500">
            This is calculated based on the variables listed below.
          </p>
        </div>
      </div>
      <Categoroy title="Tone & Style" score={feedback.toneAndStyle.score} />
      <Categoroy title="Content" score={feedback.content.score} />
      <Categoroy title="Structure" score={feedback.structure.score} />
      <Categoroy title="Skills" score={feedback.skills.score} />
    </div>
  );
}
