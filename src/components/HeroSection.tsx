import { Mail, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full section-padding pt-32">
        <div className="max-w-2xl">
          <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-4 animate-fade-in-up">
            Mechatronics & Robotics
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Yashwanth Rami Reddy
            <br />
            <span className="text-gradient-gold">Gogireddy</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            B.Eng student at the University of Liverpool passionate about robotics, AI, and building real-world solutions through technology.
          </p>
          <div className="flex flex-wrap gap-4 items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-body text-sm font-medium px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
            >
              <Mail size={16} /> Get in Touch
            </a>
            <span className="flex items-center gap-2 font-body text-sm text-muted-foreground">
              <MapPin size={16} /> Liverpool, United Kingdom
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
