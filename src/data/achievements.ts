// Leadership and achievements data
export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
}

export const achievementsData: Achievement[] = [
  {
    id: "rx-ai",
    title: "Graduation Project (RX-AI)",
    organization: "Shorouk Academy",
    description:
      "Developed an AI-powered system for drug compatibility and intelligent search, improving pharmaceutical decision-making.",
    impact: [
      "Graduated with honors for RX-AI project",
      "Implemented semantic search using ClinicalBERT and FAISS",
      "Built scalable FastAPI backend for real-world deployment",
      "Enhanced accessibility of drug information for healthcare professionals"
    ],
  },
  {
    id: "kaggle",
    title: "Kaggle Contributor",
    organization: "Kaggle",
    description:
      "Active contributor to Kaggle competitions and notebooks, focusing on NLP and computer vision challenges.",
    impact: [
      "Published reproducible ML pipelines and notebooks",
      "Achieved strong rankings in competitions",
      "Collaborated with global ML community",
      "Advanced skills in deep learning and model evaluation"
    ],
  }
];

// Education data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

export const educationData: Education[] = [
  {
    id: "shorouk",
    institution: "Shorouk Academy",
    degree: "Bachelor's Degree in Computer Science",
    duration: "2021 - 2025",
    location: "Cairo, Egypt",
  }
];

