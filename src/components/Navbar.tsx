import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
              <span>HJ</span>
            </div>
            <span className="text-white">Hemang The Human</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              EXPERIENCE
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              PROJECTS
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              SKILLS
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-yellow-500 transition-colors">
              CONTACT
            </button>
          </div>

          

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-yellow-500 transition-colors text-left">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-500 transition-colors text-left">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-yellow-500 transition-colors text-left">
              EXPERIENCE
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-yellow-500 transition-colors text-left">
              PROJECTS
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-yellow-500 transition-colors text-left">
              SKILLS
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-yellow-500 transition-colors text-left">
              CONTACT
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
