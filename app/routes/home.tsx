import type { Route } from "./+types/home";
import   {resumes} from "../../constants/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ai Resume Analyzer" },
    { name: "description", content: "Analyze resumes with ai." },
  ];
}

export default function Home() {
  return (
    <main>
      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Resume Ratings</h1>
          <h2>Get your resume and applications rated.</h2>
        </div>
      </section>
      {
        resumes.map((resume) =>(
          <div>
            <h1>{resume.jobTitle}</h1>
          </div>
        ))
      }
    </main>
  );
}
