import { projects } from "./projects";

export const skillLayers = [
  { name: "Frontend", items: ["HTML/CSS", "JavaScript", "React", "Next.js", "Three.js"] },
  { name: "Backend", items: ["Node.js", "Express", "FastAPI", "Socket.io"] },
  { name: "Languages", items: ["Python", "C++", "C#", "Java", ".NET", "JavaFX"] },
  { name: "Data", items: ["PostgreSQL", "SQL Server"] },
  { name: "AI / ML", items: ["PyTorch", "Transformers", "LoRA", "ONNX", "Optuna", "scikit-learn", "Pandas", "Gemini API", "Multi-Agent AI", "Streamlit"] },
  { name: "Tools", items: ["Docker", "Selenium", "BeautifulSoup"] },
];

const allNodes = new Set(skillLayers.flatMap((l) => l.items));

// node -> names of the projects that use it
export const projectsByNode = {};
// "a|b" -> { a, b, projects } — two nodes are connected only when a project uses both
export const links = {};

for (const p of projects) {
  const tech = p.tech.filter((t) => allNodes.has(t));
  for (const t of tech) (projectsByNode[t] ||= []).push(p.name);
  for (let i = 0; i < tech.length; i++) {
    for (let j = i + 1; j < tech.length; j++) {
      const [a, b] = [tech[i], tech[j]].sort();
      (links[`${a}|${b}`] ||= { a, b, projects: [] }).projects.push(p.name);
    }
  }
}

export const usedIn = Object.fromEntries(
  Object.entries(projectsByNode).map(([k, v]) => [k, v.join(", ")])
);
