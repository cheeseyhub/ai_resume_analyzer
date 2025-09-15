import type { Route } from "./+types/home";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";
import NavBar from "~/components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ai Resume Analyzer" },
    { name: "description", content: "Analyze resumes with ai." },
  ];
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-[url('images/bg-main.svg')] bg-cover">
        <section className="main-section">
          <div className="page-heading">
            <h1>Track your Resume Ratings</h1>
            <h2>Get your resume and applications rated.</h2>
          </div>
        </section>
        {resumes.length > 0 && (
          <section className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </section>
        )}
      </main>
    </>
  );
}
