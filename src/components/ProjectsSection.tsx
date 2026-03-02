import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AgriEasy",
    subtitle: "Smart Farming App",
    year: "2025",
    description:
      "Comprehensive mobile platform connecting farmers with markets, providing access to crop information, weather data, and seed purchases.",
    highlights: [
      "Integrated real-time weather APIs and plant data for informed farming decisions",
      "Designed an intuitive interface for rural farmers with limited digital literacy",
      "Enhanced efficiency by digitizing traditional farming operations",
    ],
  },
  {
    title: "SafeHer",
    subtitle: "Women's Safety App",
    year: "2025",
    description:
      "Application to enhance women's personal safety using real-time alerts and location tracking.",
    highlights: [
      "Implemented Google Maps API and secure communication channels for emergency alerts",
      "Developed reliable alert mechanism prioritizing privacy and minimal data usage",
      "Improved awareness through responsive and user-friendly UI design",
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
