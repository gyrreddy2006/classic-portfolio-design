import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
   title: "SHTS",
subtitle: "Pure Health in Every Shot",
year: "2025",
description:
  "Comprehensive wellness platform for SHTS — a brand offering 100% natural 60ml cold-pressed health shots made from fresh ingredients with zero preservatives, designed to support immunity, digestion, detox, and daily energy.",
highlights: [
  "Developed a clean and intuitive interface showcasing products, benefits, pricing transparency, and ordering system",
  "Highlighted natural ingredients, small-batch production, and eco-friendly packaging for brand trust",
  "Optimized user journey for quick product discovery and direct WhatsApp ordering",
  "Structured informative sections including FAQ, process flow, and health benefits for better user engagement"
    ],
  },
  {
   title: "EX",
subtitle: "Expense Tracker",
year: "2026",
description:
  "Personal finance tracking application designed to help users monitor spending, manage budgets, and categorize expenses efficiently through a simple dashboard interface.",
highlights: [
  "Built an interactive dashboard displaying total spent, remaining balance, and category-wise tracking",
  "Implemented expense categorization system including food, transport, books, entertainment, utilities, and more",
  "Added sorting and filtering features for quick financial insights",
  "Integrated export functionality for generating expense reports in PDF format",
  "Designed clean, user-friendly interface for fast expense entry and management"
    ],
  },
  {
    title: "HackaAttack",
    subtitle: "Study Platform (Team Project)",
    year: "2024",
    description:
      "Led a team of six to develop a collaborative web platform for sharing study materials.",
    highlights: [
      "Designed responsive web pages using HTML, CSS, and JavaScript",
      "Managed version control through GitHub",
      "Achieved top 10 ranking among university hackathon projects",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
          Projects
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Featured Work
        </h2>
        <div className="divider-gold mb-12" />

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 bg-background rounded border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-xs font-medium text-secondary">{project.year}</span>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{project.title}</h3>
              <p className="font-body text-sm text-secondary mb-3">{project.subtitle}</p>
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="mt-auto space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="font-body text-xs text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
