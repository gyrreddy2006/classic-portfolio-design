import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "University of Liverpool, UK",
    degree: "B.Eng (Hons) Mechatronics and Robotics Systems",
    period: "2025 – 2029",
    modules: "Programming, Robotic Systems, Experimentation Skills, Advanced Mathematics",
  },
  {
    school: "IIT Guwahati (Online), India",
    degree: "B.Sc (Hons) Data Science and Artificial Intelligence",
    period: "2024 – 2025",
    modules: "Programming, Data Analysis, Machine Learning, Mathematics for Computing",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
          Education
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Academic Background
        </h2>
        <div className="divider-gold mb-12" />

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="flex gap-5 p-6 bg-card rounded border border-border hover:border-secondary/40 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <GraduationCap size={18} className="text-secondary" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">{edu.school}</h3>
                  <span className="font-body text-xs font-medium text-secondary bg-gold-light px-2 py-0.5 rounded">
                    {edu.period}
                  </span>
                </div>
                <p className="font-body text-sm font-medium text-foreground mb-2">{edu.degree}</p>
                <p className="font-body text-sm text-muted-foreground">
                  <span className="font-semibold">Relevant Modules:</span> {edu.modules}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
