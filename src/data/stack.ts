export interface StackItem {
  name: string;
  level: "uso em projetos" | "em desenvolvimento" | "explorando";
  usedIn?: string[];
}

export interface StackCategory {
  id: string;
  label: string;
  items: StackItem[];
}

export const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML", level: "uso em projetos", usedIn: ["Agiliza", "Arquivo Digital", "Basquete Brasileiro"] },
      { name: "CSS", level: "uso em projetos", usedIn: ["Agiliza", "Arquivo Digital", "Basquete Brasileiro"] },
      { name: "JavaScript", level: "uso em projetos", usedIn: ["Basquete Brasileiro", "Arquivo Digital"] },
      { name: "TypeScript", level: "uso em projetos", usedIn: ["Agiliza Transparência"] },
      { name: "React", level: "uso em projetos", usedIn: ["Agiliza Transparência"] },
      { name: "Next.js", level: "uso em projetos", usedIn: ["Agiliza Transparência"] },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Python", level: "uso em projetos", usedIn: ["Computer Vision Lab", "EDX/TechX", "Automation Lab"] },
      { name: "PHP", level: "em desenvolvimento" },
      { name: "Laravel", level: "em desenvolvimento" },
      { name: "REST APIs", level: "uso em projetos", usedIn: ["Agiliza", "Automation Lab"] },
      { name: "SQL", level: "uso em projetos", usedIn: ["Agiliza Transparência"] },
      { name: "MySQL", level: "uso em projetos", usedIn: ["Agiliza Transparência"] },
    ],
  },
  {
    id: "ai",
    label: "AI & Data",
    items: [
      { name: "Pandas", level: "uso em projetos", usedIn: ["EDX/TechX"] },
      { name: "Scikit-learn", level: "explorando" },
      { name: "OpenCV", level: "uso em projetos", usedIn: ["Computer Vision Lab"] },
      { name: "YOLO", level: "uso em projetos", usedIn: ["Computer Vision Lab"] },
      { name: "LLMs", level: "em desenvolvimento", usedIn: ["Automation Lab", "EDX/TechX"] },
      { name: "AI Agents", level: "explorando", usedIn: ["EDX/TechX"] },
      { name: "Power BI", level: "em desenvolvimento" },
      { name: "Google Vision API", level: "uso em projetos", usedIn: ["Agiliza Transparência"] },
    ],
  },
  {
    id: "automation",
    label: "Automação",
    items: [
      { name: "n8n", level: "uso em projetos", usedIn: ["Automation Lab"] },
      { name: "Webhooks", level: "uso em projetos", usedIn: ["Automation Lab"] },
      { name: "Google APIs", level: "uso em projetos", usedIn: ["Automation Lab", "Agiliza"] },
      { name: "Gmail API", level: "uso em projetos", usedIn: ["Automation Lab"] },
      { name: "Google Drive API", level: "uso em projetos", usedIn: ["Automation Lab"] },
      { name: "Google Sheets API", level: "uso em projetos", usedIn: ["Automation Lab"] },
    ],
  },
  {
    id: "tools",
    label: "Dev Tools",
    items: [
      { name: "Git", level: "uso em projetos" },
      { name: "GitHub", level: "uso em projetos" },
      { name: "VS Code", level: "uso em projetos" },
      { name: "Figma", level: "uso em projetos" },
    ],
  },
];

export interface CarouselCard {
  group: string;
  color: string;
  items: string[];
}

export const carouselCards: CarouselCard[] = [
  { group: "PYTHON", color: "#3776AB", items: ["Python"] },
  { group: "HTML", color: "#E34F26", items: ["HTML"] },
  { group: "CSS", color: "#1572B6", items: ["CSS"] },
  { group: "JAVASCRIPT", color: "#F7DF1E", items: ["JavaScript"] },
  { group: "REACT", color: "#61DAFB", items: ["React"] },
  { group: "NEXT.JS", color: "#F5F6F8", items: ["Next.js"] },
  { group: "PHP", color: "#8892BF", items: ["PHP"] },
  { group: "LARAVEL", color: "#FF2D20", items: ["Laravel"] },
  { group: "SQL", color: "#10B981", items: ["SQL"] },
  { group: "N8N", color: "#EA4B71", items: ["n8n"] },
  { group: "POWER BI", color: "#F2C811", items: ["Power BI"] },
  { group: "GIT / GITHUB", color: "#F05032", items: ["Git", "GitHub"] },
  { group: "VS CODE", color: "#23A8F2", items: ["VS Code"] },
];
