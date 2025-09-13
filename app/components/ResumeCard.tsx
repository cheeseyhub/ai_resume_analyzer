import type { Resume } from "types/index";
import { Link } from "react-router";
const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link
      to={`/resumes/${resume.id}`}
      className="resume-card fade-in  animate-in duration-1000"
    ></Link>
  );
};
export default ResumeCard;
