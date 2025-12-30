// Projects data for Abdulrahman Taghyan

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "mental-health-chatbot",
    title: "Mental Health Chatbot (MeshMesh)",
    description:
      "An intelligent chatbot providing empathetic, context-aware support using Google Gemini API and LangGraph.",
    longDescription:
      "Developed an intelligent mental health support chatbot using Google Gemini API, LangGraph, and advanced NLP techniques. The chatbot provides a safe, non-judgmental space for users to share their thoughts while receiving empathetic and context-aware responses. It can detect high-risk situations and guide users toward appropriate mental health resources.",
    technologies: ["Python", "FastAPI", "LangGraph", "Google Gemini API", "NLP"],
    features: [
      "Advanced NLP for emotional cue detection",
      "Context-sensitive conversation flow with LangGraph",
      "Privacy-focused design with risk detection",
      "Scalable FastAPI backend"
    ],
    image: "/images/projects/meshmesh/g.png",
    demoUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/theoneandtheonlytaghyan/mental-health-chatbot",
    category: "ai"
  },
  {
    id: "rx-ai",
    title: "RX-AI (Graduation Project)",
    description:
      "AI-powered system for drug compatibility and semantic search to improve pharmaceutical decision-making.",
    longDescription:
      "Developed RX-AI, an AI-powered system for drug compatibility and intelligent search. The tool calculates drug compatibility scores based on prescription details, performs semantic search for related drugs, and suggests alternative medications. Achieved honors (امتياز) for innovation and real-world impact.",
    technologies: ["Python", "Pandas", "FAISS", "ClinicalBERT", "FastAPI"],
    features: [
      "Drug compatibility scoring",
      "Semantic search with ClinicalBERT & FAISS",
      "Alternative medication suggestions",
      "FastAPI backend for deployment"
    ],
    image: "/images/projects/rxai/h.png",
    demoUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/theoneandtheonlytaghyan/rx-ai",
    category: "ai"
  },
];
