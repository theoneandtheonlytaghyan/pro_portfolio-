import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background border-t border-border">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-foreground text-lg leading-relaxed">
              Have an AI project in mind? I'm currently available for freelance work and collaborations. 
              Let's build something impactful together.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:abmtaghyan@gmail.com"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    abmtaghyan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+201024194861"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    +20 102 4194 861
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 border border-accent/30 rounded-sm hover:border-accent hover:neon-glow transition-glow">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-accent">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary border border-accent/30 text-foreground placeholder-muted-foreground rounded-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-secondary border border-accent/30 text-foreground placeholder-muted-foreground rounded-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-secondary border border-accent/30 text-foreground placeholder-muted-foreground rounded-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-glow"
              size="lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
