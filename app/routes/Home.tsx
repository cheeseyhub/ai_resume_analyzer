import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";
import NavBar from "~/components/NavBar";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta() {
  return [
    { title: "Ai Resume Analyzer" },
    { name: "description", content: "Analyze resumes with ai." },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!auth.isAuthenticated){
      navigate("/auth?next=/");
    }
  })
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
