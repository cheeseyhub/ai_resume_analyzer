import NavBar from "~/components/NavBar";
const Upload = () => {
  return (
    <>
      <NavBar />
      <main className="bg-[url('images/bg-main.svg')] bg-cover">
        <section className="main-section">
          <div className="page-heading">
            <h1>Smart feedback for your dream job.</h1>
            <h2>Drop your resume here for an ATS score improvement tips.</h2>
          </div>

          <form>
            <div className="form-div">
              <label htmlFor="companyName">Upload Resume:</label>
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
              />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Upload;
