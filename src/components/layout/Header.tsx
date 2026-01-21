import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

const Header = () => {
  const location = useLocation();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "Blog" },
    { href: "/pricing", label: "Pricing" },
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-sans text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors group"
        >
          <Activity className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
          <span>Signals with Nithya</span>
        </Link>
        
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-sans text-sm font-medium transition-colors hover-underline",
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;