import NavBar from "~/components/NavBar";
import { useState, type FormEvent } from "react";
import FileUploader from "~/components/FileUploader";

const Upload = () => {
  const [isProccessing, setIsProccessing] = useState(false);
  const [statusText, setStatusText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {};

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

          <form>
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
              <FileUploader />
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
