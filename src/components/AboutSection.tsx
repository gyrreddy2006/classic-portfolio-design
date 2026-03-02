const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Who I Am
            </h2>
            <div className="divider-gold mt-4" />
          </div>
          <div className="md:col-span-2">
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Motivated and innovative B.Eng (Hons) Mechatronics and Robotics Systems student at the University of Liverpool with strong expertise in programming, robotics, and artificial intelligence. Experienced in leading projects from concept to implementation, developing user-focused applications, and collaborating in diverse teams.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Seeking part-time or internship opportunities to contribute technical skills and creativity to real-world solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Languages", value: "C, Html, Css, JS, " },
                { label: "Tools", value: "GitHub, Figma, VS Code, WordPress" },
                { label: "Focus", value: "Robotics & AI" },
                { label: "Location", value: "Liverpool, UK" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-secondary pl-4">
                  <p className="font-body text-xs font-semibold tracking-wider uppercase text-secondary mb-1">{item.label}</p>
                  <p className="font-body text-sm text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
