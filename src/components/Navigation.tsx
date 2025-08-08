import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg py-4"
          : "py-6"
      } ${isMobileMenuOpen ? "bg-background/100" : ""}`} 
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center md:hidden">
          <span className="text-xl font-bold">Portfolio</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        <ul className={`md:flex md:justify-center md:space-x-12 ${
          isMobileMenuOpen ? 'block pt-4' : 'hidden md:flex'
        }`}>
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item} className="md:inline-block">
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2 md:py-0 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
