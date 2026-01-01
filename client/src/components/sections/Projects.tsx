import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Mental Health Chatbot",
      description:
        "Developed an intelligent mental health support chatbot using Google Gemini API, LangGraph, and advanced NLP techniques. The chatbot provides a safe, non-judgmental space for users to share their thoughts while receiving empathetic and context-aware responses.",
      technologies: ["Google Gemini API", "LangGraph", "NLP", "Python", "FastAPI"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Graduation Project (RX-AI)",
      description:
        "Developed an AI-powered system for drug compatibility and intelligent search. Built a tool that calculates drug compatibility scores, performs semantic search for related drugs, and suggests alternative medications using advanced ML techniques.",
      technologies: [
        "Python",
        "Pandas",
        "Sentence Transformers",
        "FAISS",
        "Scikit-learn",
        "FastAPI",
      ],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Machine Learning Model Pipeline",
      description:
        "Created an end-to-end ML pipeline for preprocessing, training, and evaluating models on real-world datasets. Implemented best practices for data validation, feature engineering, and model optimization.",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
      github: "#",
      live: "#",
    },
    {
      title: "Computer Vision Project",
      description:
        "Built a computer vision application for image classification and object detection using deep learning techniques. Achieved high accuracy through transfer learning and data augmentation strategies.",
      technologies: ["PyTorch", "OpenCV", "NumPy", "CNN", "Transfer Learning"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20 border-t border-border">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`p-6 border rounded-sm transition-glow group ${
                project.featured
                  ? "border-accent neon-glow md:col-span-2 lg:col-span-1"
                  : "border-accent/30 hover:border-accent hover:neon-glow"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-accent flex-1">{project.title}</h3>
                {project.featured && (
                  <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-sm ml-2">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-sm border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 px-3 py-2 border border-accent/30 text-accent hover:border-accent hover:bg-accent/10 rounded-sm transition-colors text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-accent/10 text-accent border border-accent/30 hover:border-accent hover:bg-accent/20 rounded-sm transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
            size="lg"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
