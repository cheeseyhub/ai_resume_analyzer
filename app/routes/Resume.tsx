import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "Resumeid | Review" },
  { name: "description", content: "This is a sample resume." },
];

export default function Resume() {
  const { id } = useParams();
  const { kv, auth, isLoading, fs } = usePuterStore();
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState<string>("");
  const [resumeUrl, setResumeUrl] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth");
    }
  }, [auth.isAuthenticated]);

  //Get the data of resume from the kv storage using the id
  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume:${id}`);
      if (!resume) return;

      const data = JSON.parse(resume);

      console.log(data);
      const resumeBlob = await fs.read(data.resumePath);
      if (!resumeBlob) return;

      const pdfBlob = new Blob([resumeBlob], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setResumeUrl(pdfUrl);

      const imageBlob = await fs.read(data.imagePath);
      if (!imageBlob) return;

      const image = URL.createObjectURL(imageBlob);
      setImageURL(image);
      setFeedback(data.feedback);
    };
    loadResume();
  }, [id]);

  return (
    <div>
      <h1>Resume</h1>
      <p>This is a sample resume.</p>
    </div>
  );
}
