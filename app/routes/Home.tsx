import ResumeCard from "~/components/ResumeCard";
import NavBar from "~/components/NavBar";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import type { Resume } from "types";

export function meta() {
  return [
    { title: "Ai Resume Analyzer" },
    { name: "description", content: "Analyze resumes with ai." },
  ];
}

export default function Home() {
  const { auth, kv, fs } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(true);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?next=/");
    }
  });
  useEffect(() => {
    const loadResumes = async () => {
      const resumes = (await kv.list("resume:*", true)) as KVItem[];
      const parsedResumes: Resume[] = resumes?.map((resume) => {
        return JSON.parse(resume.value) as Resume;
      });
      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };
    loadResumes();
  }, []);

  const [files, setFiles] = useState<FSItem[]>([]);

  const loadFiles = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    setFiles(files);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const handleDelete = async () => {
    files.forEach(async (file) => {
      await fs.delete(file.path);
    });
    await kv.flush();
    loadFiles();
    setResumes([]);
  };
  return (
    <>
      <NavBar />
      <main className="bg-[url('images/bg-main.svg')] bg-cover">
        <section className="main-section">
          <div className="page-heading">
            <h1>Track your Resume Ratings</h1>
            {!loadingResumes && resumes.length > 0 ? (
              <h2>Get your resume and applications rated.</h2>
            ) : (
              <h2>Your have no resumes yet .Start by uploading your resume.</h2>
            )}
          </div>
        </section>
        {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/resume-scan-2.gif"
              className="w-[300px]"
              alt="Loading..."
            />
          </div>
        )}
        {!loadingResumes && resumes.length > 0 && (
          <section>
            <section className="resumes-section">
              {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
              ))}
            </section>
            {auth.isAuthenticated && (
              <footer className="flex justify-center">
                <button
                  className="w-fit  p-8 cursor-pointer font-semibold "
                  onClick={() => handleDelete()}
                >
                  Wipe
                </button>
              </footer>
            )}
          </section>
        )}
      </main>
    </>
  );
}
