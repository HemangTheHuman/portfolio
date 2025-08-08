import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, FileText, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-white">
      <div className="text-center max-w-4xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base text-primary/80 uppercase tracking-[0.2em] font-medium"
        >
          Welcome to my portfolio
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mt-6 mb-8 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent"
        >
          Hi, I'm Hemang Joshi 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
           Data Scientist & Generative AI Enthusiast building intelligent automation systems with Data Science, Computer Vision, and Generative AI — turning complex data into impactful solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:work.hemang@gmail.components"
            className="inline-flex items-center bg-gray-200 text-black px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Mail className="mr-2 h-5 w-5 text-black" />
            Gmail
          </a>
          <a
            href="https://www.linkedin.com/in/hemang-joshi-2030/"
            className="inline-flex items-center bg-gray-200 text-black px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2 h-5 w-5 text-black" />
            LinkedIn
          </a>
          <a
            href="https://x.com/HemangTheHuman"
            className="inline-flex items-center bg-gray-200 text-black px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Twitter className="mr-2 h-5 w-5 text-black" />
            Twitter
          </a>
          <a
            href="https://github.com/HemangTheHuman"
            className="inline-flex items-center bg-gray-200 text-black px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-5 w-5 text-black" />
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
