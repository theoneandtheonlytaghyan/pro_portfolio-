// Skills data for Abdulrahman Taghyan

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 80 },
      { name: "R", level: 70 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Machine Learning & AI",
    icon: "🤖",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 88 },
      { name: "Scikit-learn", level: 85 },
      { name: "Keras", level: 80 },
      { name: "Hugging Face", level: 85 },
      { name: "OpenCV", level: 82 },
      { name: "NLTK", level: 78 }
    ]
  },
  {
    title: "Backend & Deployment",
    icon: "⚙️",
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "Flask", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Git/GitHub", level: 90 },
      { name: "MLflow", level: 70 }
    ]
  },
  {
    title: "Data Science & Visualization",
    icon: "📊",
    skills: [
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 92 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 83 },
      { name: "Power BI", level: 70 },
      { name: "Tableau", level: 68 }
    ]
  },
  {
    title: "Soft Skills",
    icon: "🌟",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 88 },
      { name: "Team Collaboration", level: 85 },
      { name: "Communication", level: 82 },
      { name: "Leadership", level: 80 },
      { name: "Adaptability", level: 85 }
    ]
  }
];
