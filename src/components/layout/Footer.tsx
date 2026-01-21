import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link 
              to="/" 
              className="font-sans text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Signals with Nithya
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Understanding the world through signals.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/blogs" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <a 
              href="mailto:hello@signalstories.com" 
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Signals with Nithya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
