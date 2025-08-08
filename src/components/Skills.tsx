import { motion } from "framer-motion";

const skills = [
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "Kafka",
  "AWS",
  "Azure",
  "OpenAI",
  "Ollama",
  "Hugging Face",
  "MongoDB",
  "Django",
  "SQL",
  "Flask", 
  "Python",
  "Git",
  
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-secondary/5 via-background to-secondary/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Container for centering text */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-sm text-primary/80 uppercase tracking-[0.2em] font-medium">
              Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-12 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
              Tools and Technology
            </h2>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/10 backdrop-blur-sm border border-secondary/20 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="font-medium text-foreground">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
