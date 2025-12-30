// App constants

export const SITE_CONFIG = {
  name: "Abdulrahman Taghyan",
  description:
    "Machine Learning Engineer specializing in Deep Learning, NLP, Computer Vision, and deploying AI solutions. Passionate about responsible AI, continuous learning, and impactful innovation.",
  url: "https://theoneandtheonlytaghyan.github.io/tay", 
  ogImage: "/images/taghyan/og-image.png",
  links: {
    email: "abmtaghyan@gmail.com",
    github: "https://github.com/theoneandtheonlytaghyan",
    linkedin: "https://linkedin.com/in/taghyan",
    phone: "+20 1024194861",
    x: "https://x.com/iamtaghyan", 
  },
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/#achievements" },
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};
