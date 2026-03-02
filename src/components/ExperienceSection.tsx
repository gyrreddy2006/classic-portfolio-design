const experiences = [
  {
    role: "Class Representative",
    org: "Anurag University",
    period: "2024 – 2025",
    details: [
      "Acted as primary liaison between students and faculty",
      "Organized academic support and feedback sessions for over 60 students",
      "Facilitated smooth coordination for exams, schedules, and student initiatives",
    ],
  },
  {
    role: "Team Lead",
    org: 'Hackathon "HackaAttack"',
    period: "2024",
    details: [
      "Guided a 6-member team in developing a functional study-sharing platform under tight deadlines",
    ],
  },
];

const certifications = [
  "Programming in C – University of Michigan (2025)",
  "Programming with Generative AI – IIT Guwahati (2025)",
  "Introduction to Psychology – Yale University (2025)",
];

const achievements = [
  "National Level Spelling Bee Qualifier – VK Educational Solutions",
  "Top 10 ranking in multiple university-level hackathons",
  "Achieved top 10% in IIT Guwahati B.Sc qualifying exam",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
          Experience
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Leadership & Experience
        </h2>
        <div className="divider-gold mb-12" />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp) => (
            <div key={exp.role} className="border-l-2 border-secondary pl-6">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                <span className="font-body text-xs text-secondary">• {exp.period}</span>
              </div>
              <p className="font-body text-sm font-medium text-muted-foreground mb-3">{exp.org}</p>
              <ul className="space-y-2">
                {exp.details.map((d, i) => (
                  <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((c, i) => (
                <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Achievements</h3>
            <ul className="space-y-3">
              {achievements.map((a, i) => (
                <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
