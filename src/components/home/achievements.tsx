"use client";

import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LazyStarsBackground } from "../3d/lazy-stars";
import { FloatingParticles } from "../animations";

const achievements = [
  {
    icon: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google Logo"
        className="w-6 h-6 object-contain"
      />
    ),
    title: "Google Student Ambassador",
    description:
      "Actively organized workshops, tech sessions, and community events to spread awareness about Google technologies. Focused on empowering students through AI, cloud, and open-source programs, bridging learning with real-world innovation.",
    metric: "Dec 2025 – Present",
  },
  {
    icon: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
        alt="IBM Logo"
        className="w-5 h-5 object-contain scale-125"
        style={{ filter: 'brightness(1.3)' }}
      />
    ),
    title: "Artificial Intelligence Intern @ IBM",
    description:
      "Contributed to AI-driven business solutions by assisting in the development of intelligent automation systems and enhancing model efficiency for data-driven insights.",
    metric: "Aug 2025 – Oct 2025",
  },
  {
    icon: Award,
    title: "Hack India Finalist",
    description:
      "Created an AI chatbot with voice, text, and image integration that provides personalized fashion advice based on the user’s location, weather, and occasion — among the top 15 teams nationwide.",
    metric: "Top 15",
  },
  {
    icon: Users,
    title: "Coders Circle",
    description:
      "Worked hard to build a tech-driven community dedicated to helping juniors and developers in their tech journeys through mentorship, collaboration, and accessible learning initiatives.",
    metric: "1500+ Members",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#050816] via-[#0b0f26] to-[#1b1f38] text-white"
    >
      {/* Background Effects */}
      <LazyStarsBackground />
      <FloatingParticles />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(76,0,255,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,255,255,0.1),transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg">
            Achievements & Impact
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Showcasing milestones of innovation, collaboration, and growth through technology.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex"
              >
                <Card className="relative group bg-[#0a0d1a]/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col justify-between w-full h-full hover:scale-105 hover:border-cyan-500/40 transition-all duration-500 min-h-[320px]">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <CardContent className="relative text-center z-10 flex flex-col items-center justify-between h-full">
                    <div className="mx-auto w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center mb-4">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        {achievement.metric}
                      </h3>
                      <p className="font-semibold text-lg mb-1">{achievement.title}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)] pointer-events-none" />
    </section>
  );
}
