import NavBar from "~/components/NavBar";
import { useState, useEffect, type FormEvent } from "react";
import { useNavigate } from "react-router";
import FileUploader from "~/components/FileUploader";
import { usePuterStore } from "~/lib/puter";
import { convertPdfToImage } from "~/lib/pdf2img";
import { prepareInstructions } from "constants/index";
import { useLocation } from "react-router";

const Upload = () => {
  const [isProccessing, setIsProccessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string>("images/resume-scan.gif");
  const navigate = useNavigate();

  const { auth, isLoading, fs, ai, kv } = usePuterStore();
  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth");
    }
  }, [auth.isAuthenticated]);

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleAnalyze = async ({
    companyName,
    jobTitle,
    jobDescription,
    file,
  }: {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    file: File;
  }) => {
    setIsProccessing(true);
    setStatusText("Uploading...");

    const uploadedFile = await fs.upload([file]);
    if (!uploadedFile) {
      return setStatusText("Failed to upload file.");
    }

    setStatusText("Analyzing...");
    const imageFile = await convertPdfToImage(file);
    if (!imageFile.file) return setStatusText("Error: Failed to convert file.");
    setImage(imageFile.imageUrl);

    setStatusText("Uploading the image....");
    //Upload the image to the puter storage

    const uploadedImage = await fs.upload([imageFile.file]);
    if (!uploadedImage) {
      return setStatusText("Failed to upload image.");
    }

    setStatusText("Preparing Data......");

    const uuid = crypto.randomUUID();
    const data = {
      id: uuid,
      resumePath: uploadedFile.path,
      imagePath: uploadedImage.path,
      companyName,
      jobTitle,
      jobDescription,
      feedback: "",
    };
    console.log("Setting in kv storage.");
    //Store the resume in the puter storage
    await kv.set(`resume:${uuid}`, JSON.stringify(data));

    setStatusText("Analyzing......");
    //Pass the image file path and the message to analyze the image e.g you are an expert ATS and resume analysis thing.
    const feedback = await ai.feedback(
      data.imagePath,
      prepareInstructions({
        jobTitle: data.jobTitle,
        jobDescription: data.jobDescription,
      }),
    );
    //If failed to get feedback
    if (!feedback) {
      return setStatusText("Error: Faild to get feedback.");
    }
    //Get content  from the feedback
    const feedBackText: string =
      typeof feedback.message.content === "string"
        ? feedback.message.content
        : feedback.message.content[0].text;

    data.feedback = JSON.parse(feedBackText);
    await kv.set(`resume:${uuid}`, JSON.stringify(data));
    setStatusText("Finished analyzing and redirecting now ......");
    navigate(`/resume/${uuid}`);
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
                <img src={image} alt="Loading..." />
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
