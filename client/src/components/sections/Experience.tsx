export default function Experience() {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "DEPI (Digital Egypt Pioneers Initiative)",
      location: "Cairo, Egypt",
      period: "Oct 2024 - May 2025",
      description: [
        "Built and trained machine learning and deep learning models for real-world use cases.",
        "Developed preprocessing pipelines for structured and unstructured datasets.",
        "Implemented classification, regression, and NLP models using Python and industry-standard libraries.",
        "Improved model accuracy through hyperparameter tuning, feature engineering, and evaluation techniques.",
        "Collaborated with cross-functional teams to deliver high-quality AI solutions.",
      ],
    },
  ];

  const certificates = [
    {
      title: "Database - ITI (Mahara-Tech)",
      description: "Training in database design, SQL, relational modeling, and optimized query writing.",
    },
    {
      title: "Python Essentials 1 - CISCO",
      description: "Learned Python fundamentals and completed hands-on coding exercises.",
    },
    {
      title: "Mathematics - 365 Data Science",
      description: "Covered linear algebra, calculus, probability, and statistics for ML applications.",
    },
    {
      title: "Prompt Engineering - IBM",
      description: "Learned prompt crafting, optimization techniques, and real-world prompt engineering workflows.",
    },
    {
      title: "Git and GitHub - Coursera",
      description: "Experience with version control, branches, pull requests, and collaborative workflows.",
    },
    {
      title: "Networking - CISCO",
      description: "Gained foundational knowledge of IP addressing, routing, switching, and network protocols.",
    },
    {
      title: "Agile Development and Scrum - Coursera",
      description: "Learned Agile and Scrum fundamentals including user stories, sprints, and iterative development.",
    },
    {
      title: "Software Engineering - Coursera",
      description: "Studied SDLC, software architecture, design patterns, and core programming concepts.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background border-t border-border">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Work <span className="text-accent">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-4 top-6 w-8 h-8 bg-background border-2 border-accent rounded-full flex items-center justify-center hidden md:flex">
                <div className="w-3 h-3 bg-accent rounded-full" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-accent">{exp.title}</h3>
                  <p className="text-foreground font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <span className="text-sm text-accent font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-foreground text-sm flex gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">
            <span className="text-accent">Certificates</span> & Training
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow"
              >
                <h4 className="text-accent font-bold mb-2">{cert.title}</h4>
                <p className="text-sm text-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
