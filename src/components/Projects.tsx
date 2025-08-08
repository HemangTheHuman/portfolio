
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Satellite Data Archival, Monitoring and Notification System in Object Storage",
    description: "A finance and asset management app that helps users track expenses, manage assets, analyze investments and set financial goals.",
    technologies: ["Flutter", "Provider", "Firebase"],
    image: "/finio.png",  // Path to the image in the public folder
    githubUrl: "https://github.com/DEVchetan01/Finio-App.git",
    liveUrl: "https://github.com/DEVchetan01/Finio-App.git",
  },
  {
    title: "MetaTrade",
    description: "MetaTrade is the ultimate platform to buy, sell, and trade digital assets like crypto, NFTs, virtual characters, and digital art within the Metaverse. Secure, seamless, and future-ready!.",
    technologies: ["React Native", "Firebase", "VM"],
    image: "/web3.png", // You can add a placeholder image here
    githubUrl: "https://github.com/DEVchetan01/Simulated_Webapp",
    liveUrl: "https://github.com/DEVchetan01/Simulated_Webapp",
  },
  {
    title: "AI Chat-Bot",
    description: "An AI-powered chatbot that provides intelligent, real-time responses and assists users with various tasks, improving customer engagement and support.",
    technologies: ["React Native", "Gemini AI", "Firebase"],
    image: "/chat_bot.png", // You can add a placeholder image here
    githubUrl: "https://github.com/DEVchetan01/Chat-Bot.git",
    liveUrl: "https://github.com/DEVchetan01/Chat-Bot.git",
  },
  {
    title: "Job Crack",
    description: "A job search platform that connects job seekers with employers, allowing users to browse listings, apply for jobs, and manage applications with ease.",
    technologies: ["React Native", "Firebase", "VM"],
    image: "/job_search.png", // You can add a placeholder image here
    githubUrl: "https://github.com/DEVchetan01/JobSearch.git",
    liveUrl: "https://github.com/DEVchetan01/JobSearch.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary/80 uppercase tracking-[0.2em] font-medium">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-secondary/10 backdrop-blur-sm rounded-xl overflow-hidden border border-secondary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.image}  // Now using the path from the public folder
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="h-6 w-6 text-white" />
                  </a>  
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/30 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
