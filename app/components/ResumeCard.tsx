import { Link } from "react-router";
import type { Resume } from "types/index";

interface Props {
  resume: Resume;
}
const ResumeCard = ({
  resume: { id, companyName, jobTitle, imagePath, resumePath, feedback },
}: Props) => {
  return (
    <Link
      to={`/resumes/${id}`}
      className="resume-card fade-in  animate-in duration-1000 "
    >
      <div className="flex flex-col  gap-2">
        <h2 className="!text-black font-bold break-words"> {companyName}</h2>
        <h3 className="text-lg break-words  text-gray-500">{jobTitle}</h3>
        <div className="flex-shrink-0"></div>
      </div>
    </Link>
  );
};
export default ResumeCard;
