import { motion } from "framer-motion";
export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-background via-secondary/5 to-background">
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
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>
        </motion.div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-black">Freelance AI Engineer at DocTunes Pvt. Ltd.</h3>
            <p className="text-lg mb-2 text-black"><span className="font-medium">Duration:</span> July 2024 - Present</p>
            <ul className="list-disc pl-5 text-lg">
              <li>Architecting and deploying AI-powered SEO optimization pipelines integrated into the Multilipi platform.</li>
              <li>Automating backend workflows on Azure VMs for continuous data processing and scalable model inference.</li>
              <li>Designing domain-specific OCR and OCD models for regional Indian scripts (e.g., Telugu, Kaithi) to enable accurate multilingual translation and text understanding.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2 text-black">Data Scientist Project Student at ISRO NRSC</h3>
            <p className="text-lg mb-2 text-black"><span className="font-medium">Duration:</span> Feb 2025 - June 2025</p>
            <ul className="list-disc pl-5 text-lg">
              <li>Developed and deployed a robust Data Archival, Monitoring, and Notification System using Apache Kafka, MongoDB, AWS S3, and Quantum ActiveScale Object Storage.</li>
              <li>Built a custom data ingestion tool to stream large-scale satellite images directly into memory, optimized for geospatial image processing workflows.</li>
              <li>Engineered a real-time system dashboard for monitoring department-level resource utilization (RAM, CPU, GPU) across scientific workloads.</li>
              </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-black">Freelance System Desgin Engineer at Kapaxha Dynamics</h3>
            <p className="text-lg mb-2 text-black"><span className="font-medium">Duration:</span> Oct 2024 - Feb 2025</p>
            <ul className="list-disc pl-5 text-lg">
              <li>Designed a control architecture for heterogeneous UAV swarms integrating telemetry data and visual odometry using Python, PyMAVLink, and ROS-based communication.</li>
              <li>Implemented dynamic mission planning algorithms for autonomous surveillance operations and multi-drone formations.</li>
              <li>Contributed to modular UAV interface systems enabling interoperability between fixed-wing and quadcopter platforms.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-black">AI/ML Lead of Makerspace Community</h3>
            <p className="text-lg mb-2 text-black"><span className="font-medium">Duration:</span> Sept 2022 - June 2025</p>
            <ul className="list-disc pl-5 text-lg">
              <li>Led a team of student researchers in building and deploying AI/ML applications with real-world relevance.</li>
              <li>Conducted technical workshops and project-based training on Machine Learning, Computer Vision, and Generative AI.</li>
              <li>Organized and managed large-scale events and hackathons; led the university team to a win at the Smart India Hackathon (SIH).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
