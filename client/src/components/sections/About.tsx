export default function About() {
  return (
    <section id="about" className="py-20 bg-background border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                About <span className="text-accent">Me</span>
              </h2>
              <div className="w-12 h-1 bg-accent rounded-full" />
            </div>

            <p className="text-foreground text-lg leading-relaxed">
              I'm an AI Engineer with a passion for building intelligent systems that solve real-world problems. 
              With expertise in machine learning, deep learning, and large-scale AI systems, I specialize in 
              transforming complex data into actionable insights.
            </p>

            <p className="text-foreground text-lg leading-relaxed">
              Currently interning at DEPI (Digital Egypt Pioneers Initiative), where I build and deploy 
              machine learning models for production use. I'm proficient in Python, PyTorch, TensorFlow, 
              and have hands-on experience with NLP, computer vision, and LLMs.
            </p>

            <p className="text-foreground text-lg leading-relaxed">
              Passionate about responsible AI, continuous learning, and creating impactful solutions that 
              push the boundaries of what's possible with artificial intelligence.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow">
                <div className="text-2xl font-bold text-accent">1+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="space-y-6">
            <div className="p-6 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow">
              <h3 className="text-xl font-bold text-accent mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-foreground font-medium">Bachelor's in Computer Science</p>
                  <p className="text-sm text-muted-foreground">Shorouk Academy • 2021 - 2025</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow">
              <h3 className="text-xl font-bold text-accent mb-4">Location</h3>
              <p className="text-foreground">Cairo, Egypt</p>
            </div>

            <div className="p-6 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow">
              <h3 className="text-xl font-bold text-accent mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-foreground">Arabic</span>
                  <span className="text-accent">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">English</span>
                  <span className="text-accent">Fluent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
