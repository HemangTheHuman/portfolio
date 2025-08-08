import { motion } from "framer-motion";
export const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background via-secondary/5 to-background">
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
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
              Quick Introduction
            </h2>
          </div>
   
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I’m Hemang Joshi, an AI Engineer passionate about building intelligent, end-to-end automation systems.
              I recently completed my final semester project internship at ISRO–NRSC, where I worked in the field of Data Engineering and Data Science and authored a research paper on the same. Currently, I’m freelancing with a local startup as an AI Engineer — a journey I began even before my time at ISRO.
            </p>
            <p className="text-lg">
              My expertise spans across frameworks and tools like Flask, Django, Kafka, AWS, Azure, TensorFlow, OpenCV, Hugging Face, Ollama, and OpenAI, with Python and JavaScript as my primary languages.
              I've contributed to solutions across multiple industries including Healthcare AI, LegalTech, Automation, Drone Tech, FinTech, and DevOps. I specialize in building scalable AI-powered systems that integrate and automate complete pipelines — from data ingestion to model deployment.
            </p>
            <p className="text-lg">
              I'm actively seeking development roles that challenge me and provide opportunities to grow both technically and personally.
            </p>
            
            {/* CV Link */}
            <p className="text-lg">
              <a href="https://drive.google.com/file/d/1nPKeQh3vA6i1r9Y7UAyB01PZjVLt4q8M/view" target="_blank" className="text-blue-500 font-bold hover:underline">
                Download CV
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
