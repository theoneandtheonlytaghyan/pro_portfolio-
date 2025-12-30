import { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SkillsShowcase} from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "About | Abdulrahman Taghyan",
  description: "Learn more about Abdulrahman Taghyan - Machine Learning Engineer and Computer Science student at Shorouk Academy",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
        <SkillsShowcase />
        <Achievements />
      </div>
    </>
  );
}