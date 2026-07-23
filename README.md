# AI Resume Analyzer
It asks for the name of the company, job role, and the description of the role that you are applying for and then you upload your resume. It analyzes it and tells you how well you are fit for the job.
and gives you an ATS (Applicant Tracking System) Score.

## ⚙️Instructions on how it works
  1. ✍️ sign up with google
  2. ⬆️ Click on the upload button
  3. 📝 Enter the job title that you are applying for, and enter the company name that has posted the job.
  4. ⬆️ upload you resume
  5. ⏱️ Wait for the document to be analyzed.
  6. 👍 Get your ATS score and improvement suggestions


** 🤖 Live Link: https://ai-resume-analyzer-p0rmk6woi-cheeseyhubs-projects.vercel.app/ **




## a) App name, what it does, and the real problem it solves (and for whom)

- App name: AI Resume Analyzer
- What it does: Lets users upload a resume, provide the target company and job role (and optional job description), then uses AI to analyze resume content against the job requirements and returns:
  - An ATS fit score
  - Strengths and weaknesses relative to the role
  - Matched keywords and missing keywords
  - Bullet-point rewrite suggestions and improvement tips
- Problem it solves: Many applicants struggle to tailor resumes to specific job postings and to understand how ATS systems parse and score resumes. This tool automates that analysis and gives clear, actionable edits so users can improve their chances of getting past ATS and into interviews.
- For whom: Job seekers (entry-level to senior), university students (assignment/demonstration), career coaches, recruiters wanting quick candidate summaries.

---



## c) Features

- Sign in with Google (OAuth) for a personalized experience
- Drag-and-drop or clickable resume upload (PDF support)
- Enter company name, job title, and (optionally) full job description
- Client-side resume parsing and preview (powered by pdfjs / parsing utilities)
- AI analysis that:
  - Computes an ATS compatibility score
  - Extracts and highlights matched and missing keywords/skills
  - Identifies resume sections to improve (summary, bullets, skills)
  - Suggests reworded bullet points tailored to the job
  - Provides overall feedback and next steps
- Interactive UI that shows parsed resume and suggested edits
- Option to download the improvement suggestions / edited content
- Responsive design and accessible UI components

---

## d) The AI feature — what it does and the system prompt / instructions

What it does:
- The core AI compares the parsed resume text with the job title/company/description and returns:
  - An ATS score (0–100)
  - A short explanation of the score
  - Strengths (what the resume already matches)
  - Gaps (missing skills / keywords)
  - Suggested rewrites for 3–5 bullet points and a resume summary
  - A list of keywords to add to improve ATS ranking



## f) Screenshots (3+)

Below are screenshots from the app UI. Keep these if they reflect your app or replace with your own images.

<img width="1395" height="934" alt="image" src="https://github.com/user-attachments/assets/a117c4a3-9d4a-487a-bb50-37e9507b737e" />

<img width="1333" height="1026" alt="image" src="https://github.com/user-attachments/assets/95f7fe31-b7cf-43eb-b695-75bb1ede917d" />

<img width="1869" height="1035" alt="image" src="https://github.com/user-attachments/assets/014c2f64-570f-422a-aa30-70e842ca2579" />

(Additional screenshots)

<img width="1292" height="679" alt="image" src="https://github.com/user-attachments/assets/4a1f30f7-cbca-4f3b-b43d-f615441ef29e" />

<img width="1854" height="617" alt="image" src="https://github.com/user-attachments/assets/f0c3f649-1124-4f2e-b81c-da71bf56e12b" />

<img width="902" height="899" alt="image" src="https://github.com/user-attachments/assets/2f3b8180-3841-400d-815c-4c3c293da97e" />

---

## g) How to run the project (local)

1. Clone the repository
   - git clone https://github.com/cheeseyhub/ai_resume_analyzer.git
   - cd ai_resume_analyzer

2. Install dependencies
   - npm install

3. Environment variables
   - Create a `.env` file (or set env vars in your host) with the required keys. Example names — update if your code expects different names:
     - OPENAI_API_KEY=sk-...
     - NEXTAUTH_URL=http://localhost:5173
     - GOOGLE_CLIENT_ID=your-google-client-id
     - GOOGLE_CLIENT_SECRET=your-google-client-secret
     - NODE_ENV=development
     - (If you have a backend endpoint) API_BASE_URL=http://localhost:YOUR_PORT
   - If your app calls the OpenAI API from a server, ensure the key is stored server-side (never expose keys in frontend).

4. Run in development
   - npm run dev
   - Open http://localhost:5173 (or the address printed in the terminal)

5. Build & serve
   - npm run build
   - npm start


---

## Supported file types
- PDF
- PDF (recommended)

