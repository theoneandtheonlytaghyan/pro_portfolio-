import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-accent rounded-sm flex items-center justify-center">
                <span className="text-accent font-bold text-sm">AT</span>
              </div>
              <span className="text-accent font-bold">Abdulrahman Taghyan</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Machine Learning Engineer | AI Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-accent font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/theoneandtheonlytaghyan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-accent/30 rounded-sm hover:border-accent hover:bg-accent/10 hover:neon-glow transition-glow"
              >
                <Github className="w-5 h-5 text-accent" />
              </a>
              <a
                href="https://linkedin.com/in/taghyan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-accent/30 rounded-sm hover:border-accent hover:bg-accent/10 hover:neon-glow transition-glow"
              >
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
              <a
                href="mailto:abmtaghyan@gmail.com"
                className="p-2 border border-accent/30 rounded-sm hover:border-accent hover:bg-accent/10 hover:neon-glow transition-glow"
              >
                <Mail className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 Abdulrahman Taghyan. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 border border-accent/30 rounded-sm hover:border-accent hover:bg-accent/10 hover:neon-glow transition-glow"
          >
            <ArrowUp className="w-5 h-5 text-accent" />
          </button>
        </div>
      </div>
    </footer>
  );
}
