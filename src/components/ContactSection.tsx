import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
          Contact
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Let's Connect
        </h2>
        <p className="font-body text-base text-primary-foreground/70 mb-10 max-w-md mx-auto">
          Open to internship and part-time opportunities. Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href="mailto:Y.R.R.Gogireddy@student.liverpool.ac.uk"
            className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
          >
            <Mail size={16} /> Y.R.R.Gogireddy@student.liverpool.ac.uk
          </a>
          <a
            href="tel:+447340916937"
            className="flex items-center gap-2 font-body text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
          >
            <Phone size={16} /> +44 7340 916937
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Github size={18} />

          <div className="flex justify-center gap-4">
          <a
            href="https://gyrr.netlify.app/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Portfolio size={18} />
          </a>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
