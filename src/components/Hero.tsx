import { Github, Linkedin, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMG5pZ2h0JTIwc2t5fGVufDF8fHx8MTc2MTgxNDY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-900/80"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white mb-4">
          Hi, I am <span className="text-yellow-500">Hemang Joshi</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          AI/ML Engineer & Data Scientist specializing in building intelligent systems 
          that transform data into actionable insights. I develop cutting-edge machine learning 
          models and deploy scalable AI solutions.
        </p>
        
        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a 
            href="https://github.com/HemangTheHuman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-yellow-500 hover:border-yellow-500 transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://x.com/HemangTheHuman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-yellow-500 hover:border-yellow-500 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/hemang-joshi-2030" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-yellow-500 hover:border-yellow-500 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
