import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-accent text-lg font-medium">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Abdulrahman
              <br />
              <span className="text-accent">Taghyan</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Machine Learning Engineer
            </p>
          </div>

          <p className="text-foreground text-lg leading-relaxed max-w-lg">
            AI Engineer specializing in machine learning, deep learning, and large-scale AI systems. 
            Proficient in Python, PyTorch, TensorFlow, and deploying AI models into production.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-glow"
              size="lg"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 transition-glow"
              size="lg"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/theoneandtheonlytaghyan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-accent rounded-sm hover:bg-accent/10 hover:neon-glow transition-glow"
            >
              <Github className="w-5 h-5 text-accent" />
            </a>
            <a
              href="https://linkedin.com/in/taghyan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-accent rounded-sm hover:bg-accent/10 hover:neon-glow transition-glow"
            >
              <Linkedin className="w-5 h-5 text-accent" />
            </a>
            <a
              href="mailto:abmtaghyan@gmail.com"
              className="p-3 border border-accent rounded-sm hover:bg-accent/10 hover:neon-glow transition-glow"
            >
              <Mail className="w-5 h-5 text-accent" />
            </a>
          </div>
        </div>

        {/* Right Side - Decorative Element */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Animated Border */}
            <div className="absolute inset-0 border-2 border-accent rounded-lg neon-glow animate-pulse" />
            <div className="absolute inset-4 border border-accent/50 rounded-lg" />
            <div className="absolute inset-8 border border-accent/25 rounded-lg" />

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent mb-4">ML</div>
                <div className="text-sm text-muted-foreground">Machine Learning</div>
                <div className="text-sm text-muted-foreground">Deep Learning</div>
                <div className="text-sm text-muted-foreground">AI Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
