export default function ScoreBadge({ score }: { score: number }) {
  let badgeColor = "";
  let badgeText = "";

  if (score >= 70) {
    badgeColor = "bg-green-300";
    badgeText = "Great";
  } else if (score >= 49) {
    badgeColor = "bg-blue-300";
    badgeText = "Good";
  } else {
    badgeColor = "bg-red-300";
    badgeText = "Bad";
  }
  return (
    <div
      className={`rounded-full px-2 py-1 text-white font-bold ${badgeColor}`}
    >
      {badgeText}
    </div>
  );
}
