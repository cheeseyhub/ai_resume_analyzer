import NavBar from "~/components/NavBar";
import { useState, useEffect, type FormEvent } from "react";
import FileUploader from "~/components/FileUploader";
import { convertPdfToImage } from "~/lib/pdf2img";
import type { FileMetaData } from "types";

const Upload = () => {
  const [isProccessing, setIsProccessing] = useState(false);
  const [statusText, setStatusText] = useState("");

  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleAnalyze = ({
    companyName,
    jobTitle,
    jobDescription,
    file,
  }: {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    file: File | FileMetaData;
  }) => {
    setIsProccessing(true);
    setStatusText("Uploading...");
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form) return;
    const formData = new FormData(form);
    const companyName = formData.get("companyName") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const jobDescription = formData.get("jobDescription") as string;

    if (!file) {
      setStatusText("Please upload a resume file.");
      console.log("No File.");
      return;
    }
    handleAnalyze({ companyName, jobTitle, jobDescription, file });
  };

  return (
    <>
      <NavBar />
      <main className="bg-[url('images/bg-main.svg')] bg-cover">
        <section className="main-section ">
          <div className="page-heading">
            <h1>
              Smart feedback <br />
              For your dream job.
            </h1>
            {isProccessing ? (
              <>
                <h2>{statusText}</h2>
                <img src="images/resume-scan.gif" alt="Loading..." />
              </>
            ) : (
              <h2>Drop your resume here for an ATS score improvement tips.</h2>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-div">
              <label htmlFor="companyName">Company Name:</label>
              <input type="text" id="companyName" name="companyName" />
            </div>
            <div className="form-div">
              <label htmlFor="jobTitle">Job Title:</label>
              <input type="text" id="jobTitle" name="jobTitle" />
            </div>
            <div className="form-div">
              <label htmlFor="jobDescription">Job Description:</label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                placeholder="Write a clear & concise job description with responsibilites and expectations."
                rows={4}
              />
            </div>

            <div className="form-div">
              <label htmlFor="file_uploader">Upload Resume:</label>
              <FileUploader onFileSelect={handleFileSelect} />
            </div>

            <button type="submit" className="primary-button">
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Upload;
