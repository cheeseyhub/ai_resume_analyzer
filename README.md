# AI Resume Analyzer

[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://ai-resume-analyzer-p0rmk6woi-cheeseyhubs-projects.vercel.app/)
[![Repo Language](https://img.shields.io/github/languages/top/cheeseyhub/ai_resume_analyzer)](https://github.com/cheeseyhub/ai_resume_analyzer)

AI Resume Analyzer helps job seekers quickly find how well their resume matches a job posting and gives concrete suggestions to improve their Applicant Tracking System (ATS) score. It is designed for job applicants, career coaches, and students preparing assignments who want fast, actionable feedback on resume fit for a specific company and role.

Live demo: https://ai-resume-analyzer-p0rmk6woi-cheeseyhubs-projects.vercel.app/

---

Table of Contents
- [a) App name, what it does, and the real problem it solves (and for whom)](#a-app-name-what-it-does-and-the-real-problem-it-solves-and-for-whom)
- [b) LIVE deployed URL](#b-live-deployed-url)
- [c) Features](#c-features)
- [d) The AI feature — what it does and the system prompt / instructions](#d-the-ai-feature--what-it-does-and-the-system-prompt--instructions)
- [e) Tools, services, and AI models used (or recommended)](#e-tools-services-and-ai-models-used-or-recommended)
- [f) Screenshots (3+)](#f-screenshots-3)
- [g) How to run the project (local)](#g-how-to-run-the-project-local)
- [Supported file types](#supported-file-types)
- [Quick example request / response](#quick-example-request--response)
- [Known limitations](#known-limitations)
- [Contributing](#contributing)
- [License](#license)

---

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

## b) LIVE deployed URL

- Live demo: https://ai-resume-analyzer-p0rmk6woi-cheeseyhubs-projects.vercel.app/

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

Recommended system prompt (example)

```
You are a professional resume reviewer and ATS specialist. Given a candidate's resume text and a job posting (title/company/description), produce:
1) An integer ATS score between 0 and 100.
2) A one-paragraph summary why the score was given.
3) A list of strengths (3-6 items) showing matched skills/experience.
4) A list of gaps / missing keywords (3-8 items).
5) Up to 5 suggested rewritten bullet points tailored to the job (concise, action-oriented).
6) A short revised resume summary (2-3 sentences).
7) A JSON object only (machine-parseable) with the fields: score, explanation, strengths[], gaps[], suggestions[], revised_summary.
Be concise and factual. Use a low temperature for deterministic output. Return the JSON only.
```

Example user prompt (payload to LLM)
- Provide the parsed resume text and job info as the "user" content. Ask the model to return the JSON schema above.

Recommended model & settings (adjust to what you use)
- Model: gpt-4 (or another instruction-following LLM)
- Temperature: 0–0.2
- Max tokens: set high enough for suggestions (e.g., 800–1500 depending on model)

Suggested response schema (example)
- The app expects a machine-readable JSON like:
{
  "score": 72,
  "explanation": "Good match on front-end skills, missing cloud-cert keywords",
  "strengths": ["React", "TypeScript", "component-driven design"],
  "gaps": ["AWS", "Docker", "CI/CD"],
  "suggestions": ["Rewrote bullet: ...", "..."],
  "revised_summary": "Experienced front-end engineer with ... "
}

Note: If your app parses the LLM response, ensure the model returns strictly-valid JSON (you can use the model's JSON schema features or post-processing validation).

---

## e) Tools, services, and AI models used (or recommended)

- Frontend stack:
  - TypeScript, React 19
  - react-router (v7)
  - Vite (dev tooling)
  - Tailwind CSS + tw-animate-css
  - Zustand (state management)
- Resume parsing / PDF handling:
  - pdfjs-dist, pdf2pic (PDF rendering and conversion)
  - react-dropzone (file upload UX)
- AI / LLM (example / recommended)
  - OpenAI GPT-4 (or another LLM). Replace with your model provider if different.
- Authentication:
  - Google OAuth (Google client ID / secret)
- Deployment options (choose one):
  - Vercel, Netlify, Railway, or any static + server hosting (Docker supported)
- Other tooling:
  - Docker (optional containerization)
  - GitHub for source control

If your project uses a different AI provider or model, replace the above with the exact provider & model name you used.

---

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

6. Docker (optional)
   - docker build -t ai-resume-analyzer .
   - docker run -e OPENAI_API_KEY=sk-... -p 3000:3000 ai-resume-analyzer

---

## Supported file types
- PDF (recommended)
- DOCX (if supported by your parsing setup)
- Plain text (.txt)

If a file type is not parsed correctly, convert it to PDF first.

---

## Quick example request / response
Example LLM request payload (JSON):
{
  "resume_text": "<full extracted resume text>",
  "job_title": "Frontend Engineer",
  "company": "Example Corp",
  "job_description": "..."
}

Example LLM response (expected JSON):
{
  "score": 78,
  "explanation": "Strong frontend experience, missing cloud keywords",
  "strengths": ["React", "TypeScript", "component design"],
  "gaps": ["AWS", "Docker", "CI/CD"],
  "suggestions": ["Rewrote bullet: ..."],
  "revised_summary": "Experienced frontend engineer..."
}

---

## Known limitations
- ATS scoring is heuristic: different companies use different ATS rules — treat the score as guidance, not a guarantee.
- LLM responses may vary with model or prompt wording — use a fixed prompt and low temperature for consistent outputs.
- Parsing complex PDFs (with images, multi-column layouts) may lose structure; prefer text-based PDFs.

---

## Contributing
Contributions are welcome. If you'd like to improve the project:
1. Fork the repo
2. Create a feature branch (git checkout -b feature/my-change)
3. Commit changes and push (git push origin feature/my-change)
4. Open a pull request describing the change

Please include tests (where appropriate) and update the README for any new functionality.

---

## License
MIT License — see LICENSE file if present. If you want a different license, add it to the repo.

---

## Privacy & Data handling

- Uploaded resumes should be treated as sensitive. If you send them to an external API (LLM provider), make sure the provider's terms allow it and that you inform users.
- If you need to comply with stricter privacy rules, implement server-side processing, avoid logging resume text, and delete uploaded files after analysis.

---

## Troubleshooting & Notes

- If the AI returns invalid JSON, the app may fail to display suggestions. Use a robust JSON-validate step or a schema check on the server.
- If you see CORS issues when calling your AI backend in development, ensure the backend allows requests from your dev origin.
- Adjust the model temperature to 0–0.2 for deterministic scoring and editing suggestions.
