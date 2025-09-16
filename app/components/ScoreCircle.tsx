const ScoreCircle = ({ score = 75 }: { score: number }) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * Math.PI * 2;
  const percentage = score / 100;
  return <div className="relative w-[100px] h-[100px]">
    <svg width="100%" height="100%" viewBox="0 0 100 100" className="transform -rotate-90">
      {/* Background circle */}
      <circle cx="50%" cy="50%" r={normalizedRadius} stroke="#e5e7eb" strokeWidth={stroke} fill="transparent"/>
      
      
      
    </svg>
  </div>;
};
