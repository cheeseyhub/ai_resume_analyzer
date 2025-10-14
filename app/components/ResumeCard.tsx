import { Link } from "react-router";
import type { Resume } from "types/index";
import ScoreCircle from "./ScoreCircle";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";

interface Props {
  resume: Resume;
}
const ResumeCard = ({
  resume: { id, companyName, jobTitle, imagePath, resumePath, feedback },
}: Props) => {
  const { fs } = usePuterStore();
  const [resumeUrl, setResumeUrl] = useState<string>("");

  useEffect(() => {
    const loadResume = async () => {
      const blob = await fs.read(imagePath);
      if (!blob) return;
      let url = URL.createObjectURL(blob);
      setResumeUrl(url);
    };
    loadResume();
  }, [imagePath]);

  return (
    <Link
      to={`/resume/${id}`}
      className="resume-card fade-in  animate-in duration-1000"
    >
      <div className="resume-card-header">
        <div className="flex flex-col  gap-2">
          <h2 className="!text-black font-bold break-words"> {companyName}</h2>
          <h3 className="text-lg break-words  text-gray-500">{jobTitle}</h3>
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      {resumeUrl && (
        <div className="gradient-border animate-in fade-in duration-1000">
          <div className="w-full h-full">
            <img
              src={resumeUrl}
              alt="resume"
              className="w-full h-[350px] max-sm:h-[200px] object-cover"
            />
          </div>
        </div>
      )}
    </Link>
  );
};
export default ResumeCard;
