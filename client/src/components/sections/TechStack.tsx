export default function TechStack() {
  const skills = {
    "Machine Learning & AI": [
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "NLP",
      "Model Evaluation",
    ],
    "Languages & Libraries": [
      "Python",
      "C++",
      "C#",
      "R",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Matplotlib",
      "Seaborn",
      "OpenCV",
      "NLTK",
      "Hugging Face",
    ],
    "Databases & Tools": [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "MySQL",
      "Excel",
      "Power BI",
      "Tableau",
      "Google Colab",
      "Jupyter Notebook",
    ],
    "MLOps & Deployment": [
      "Git",
      "GitHub",
      "Docker",
      "FastAPI",
      "Flask",
      "Streamlit",
      "MLflow",
      "CI/CD",
      "Model Deployment",
      "RESTful APIs",
      "Agile",
      "Scrum",
    ],
  };

  return (
    <section id="tech-stack" className="py-20 bg-secondary/20 border-t border-border">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My Full <span className="text-accent">Tech Stack</span>
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow group"
            >
              <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-accent transition-colors">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-sm border border-accent/20 hover:border-accent hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-8 p-6 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow">
          <h3 className="text-xl font-bold text-accent mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Problem-Solving",
              "Critical Thinking",
              "Team Collaboration",
              "Communication",
              "Analytical Thinking",
              "Adaptability",
              "Attention to Detail",
              "Creativity",
              "Leadership",
              "Time Management",
              "Research Ability",
              "Mentoring",
            ].map((skill) => (
              <div key={skill} className="text-center">
                <p className="text-foreground text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
