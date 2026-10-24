import { projects } from "./projects";

export const profile = {
  name: "Taha",
  fullName: "Muhammad Taha Irfan",
  email: "tahairfan549@gmail.com",
  github: "https://github.com/Taha-tech05",
  githubLabel: "github.com/Taha-tech05",
  linkedin: "https://linkedin.com/in/taha-irfan05",
  linkedinLabel: "linkedin.com/in/taha-irfan05",
  intro:
    "Computer Science student at FAST‑NUCES Islamabad, passionate about full‑stack web development, AI/ML systems, and scalable, user‑focused applications.",
  bio: "I'm Muhammad Taha Irfan, a Computer Science student at FAST NUCES Islamabad with a passion for building impactful digital solutions. My interests span full-stack web development, database systems, and machine learning, where I enjoy turning complex problems into scalable, user-focused applications.",
  metrics: [
    { num: "5", label: "role-based dashboards in production CMS" },
    { num: "200+", label: "students served via research platform" },
    { num: String(projects.length), label: "projects built" },
  ],
  focus: [
    { title: "Full‑Stack Development", text: "React, Next.js, Node/Express, Postgres/Prisma" },
    { title: "AI/ML Systems", text: "LangGraph agents, Gemini API, applied ML" },
    { title: "Backend Developer", text: "REST APIs, relational schemas, auth, real-time" },
    { title: "C++ Developer", text: "Systems & simulation: scheduling, pathfinding" },
    { title: "Parallel Computing", text: "Batched queries, parallel migration pipelines" },
    { title: "3D Visualization / AI Agents", text: "React Three Fiber, multi-agent orchestration" },
  ],
};
