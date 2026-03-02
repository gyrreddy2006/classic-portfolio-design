const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-primary border-t border-primary-foreground/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Yashwanth Rami Reddy Gogireddy. All rights reserved.
        </p>
        <p className="font-body text-xs text-primary-foreground/50">
          Built with passion for engineering.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
