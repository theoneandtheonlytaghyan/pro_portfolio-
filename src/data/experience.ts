export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
};

export const experienceData: Experience[] = [
  {
    id: "depi-training",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    role: "Machine Learning Trainee",
    duration: "Oct 2024 - Apr 2025",
    location: "Cairo, Egypt",
    description:
      "Completed an intensive scholarship program focused on machine learning, deep learning, and AI deployment.",
    achievements: [
      "Built and trained ML/DL models for real-world use cases",
      "Developed preprocessing pipelines for structured and unstructured datasets",
      "Implemented classification, regression, and NLP models",
      "Improved model accuracy through hyperparameter tuning and feature engineering"
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "FastAPI"
    ],
    type: "training"
  },
  {
    id: "ml-freelance",
    company: "Freelance",
    role: "Machine Learning Engineer",
    duration: "May 2025 - Dec 2025",
    location: "Remote · Cairo, Egypt",
    description:
      "Worked as a freelance Machine Learning Engineer, delivering AI-powered solutions for diverse clients and projects.",
    achievements: [
      "Developed and deployed machine learning models for NLP and computer vision tasks",
      "Built scalable APIs using FastAPI for real-world applications",
      "Collaborated with clients to customize AI solutions for business needs",
      "Enhanced model performance through hyperparameter tuning and advanced evaluation techniques"
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "FastAPI",
      "Scikit-learn",
      "Docker",
      "GitHub"
    ],
    type: "freelance"
  },
  {
    id: "military-service",
    company: "Egyptian Armed Forces",
    role: "Military Service",
    duration: "Jan 2026 - Present",
    location: "Egypt",
    description:
      "Currently serving mandatory military service, gaining discipline, leadership, and teamwork experience.",
    achievements: [
      "Developed resilience and adaptability in challenging environments",
      "Strengthened leadership and collaboration skills",
      "Built strong time management and organizational capabilities",
      "Contributed to national service with dedication and responsibility"
    ],
    technologies: [
      "Leadership",
      "Teamwork",
      "Discipline",
      "Adaptability"
    ],
    type: "service"
  }
];
