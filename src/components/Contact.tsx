
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary/5 via-background to-secondary/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-primary/80 uppercase tracking-[0.2em] font-medium">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects.  <br />
            Feel free to reach out! 
          </p>
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:work.hemang@gmail.com"
              className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="mr-2 h-4 w-4" />
              Say Hello
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
