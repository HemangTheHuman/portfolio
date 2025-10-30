import { Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useState } from 'react';
import { ExperienceDetailModal } from './ExperienceDetailModal';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  location?: string;
  detailedContent?: {
    blogContent: string[];
    technologies: string[];
    images?: string[];
  };
}

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const workExperience: ExperienceItem[] = [
    {
      title: 'Data Engineer Project Student',
      company: 'National Remote Sensing Center, ISRO',
      period: 'Jan,2025 - June,2025',
      location: 'Hyderabad, Telangana, India',
      description: 'Developed an on-prem, high-throughput satellite data archival platform using Apache Kafka and Quantum ActiveScale that tracked ingestion and every object action via event streams and audit logs; shipped a real-time monitoring dashboard for ops/security in a high-speed, secure environment, enabling reliable data pipelines for downstream ML and geospatial analytics. In a PoC/feasibility study, streamed multi-GB objects directly from cloud/object storage into system memory for near-real-time processing and built a DEM workflow that fused 2D imagery with altitude metadata to generate Digital Elevation Models for visualization and analysis; delivered a findings report with recommendations',
      detailedContent: {
        blogContent: [
          'Joining AI Research Lab as a Senior ML Engineer was a pivotal moment in my career. It was the opportunity I\'d been working toward – leading cutting-edge AI research while building production systems that serve millions of users daily.',
          '## The First Challenge',
          'My first major project was rebuilding our object detection pipeline. The existing system was accurate but painfully slow, taking several seconds to process each image. In production, that\'s an eternity. Users were abandoning our app before results could load.',
          'I approached this with a clear goal: maintain accuracy while achieving sub-100ms inference time. This meant diving deep into model optimization, quantization, and distributed computing.',
          '[IMAGE:0]',
          '### Optimizing for Speed',
          'I started by profiling every component of our pipeline. The bottleneck was clear – our ResNet-152 model was simply too large for real-time use. But we couldn\'t sacrifice accuracy.',
          'The solution was a combination of techniques:',
          '- Knowledge distillation: training a smaller "student" model to mimic our large model',
          '- Post-training quantization: converting weights from 32-bit to 8-bit',
          '- TorchScript optimization for faster inference',
          '- Strategic caching of common queries',
          'The result? We reduced inference time by 60% while maintaining 95% accuracy. Users noticed immediately – engagement metrics jumped by 40%.',
          '## Building the MLOps Pipeline',
          'As our team grew and we deployed more models, managing the entire lifecycle became chaotic. Models were trained on local machines, deployed manually, and monitored inconsistently. We needed structure.',
          'I led the migration to a comprehensive MLOps platform using MLflow, Kubernetes, and AWS SageMaker. This wasn\'t just about tools – it required changing how the entire team worked.',
          '> "The hardest part wasn\'t the technology. It was convincing researchers who loved their Jupyter notebooks to adopt standardized practices. I had to show them that structure wouldn\'t slow them down – it would make them faster."',
          '### The Platform',
          'The MLOps system I designed includes:',
          '**Experiment Tracking**',
          'Every model training run is logged automatically with all hyperparameters, metrics, and artifacts. We can reproduce any experiment from months ago.',
          '**Model Registry**',
          'A centralized repository for all models with version control, approval workflows, and staging environments.',
          '**Automated Deployment**',
          'Models that pass validation are automatically deployed to staging, then production after A/B testing confirms improvement.',
          '**Monitoring**',
          'Real-time monitoring of model performance, data drift, and system health with automatic alerts.',
          '[IMAGE:1]',
          '## Research to Production',
          'One of the most exciting aspects of this role has been bridging research and production. I\'ve co-authored papers published at NeurIPS and CVPR, but what I\'m most proud of is seeing that research running in production.',
          'We developed a novel attention mechanism for image classification that improved accuracy by 3% while reducing parameters by 20%. That might sound modest, but at our scale, 3% means thousands fewer errors daily.',
          '## Mentoring the Next Generation',
          'Leading a team means nurturing talent. I run weekly workshops on ML best practices, code review sessions, and one-on-ones with junior engineers.',
          'One of my mentees recently deployed their first production model – a sentiment analysis system for customer feedback. Watching them present to the exec team, confidently explaining their approach and results, reminded me why I love this role.',
          '## Technical Deep Dives',
          'The technology stack we use is extensive:',
          '- **Training**: PyTorch for model development, distributed training across 8-16 GPUs',
          '- **Deployment**: Docker containers on Kubernetes, auto-scaling based on load',
          '- **Serving**: TorchServe and TensorFlow Serving for model inference',
          '- **Monitoring**: Prometheus for metrics, Grafana for visualization',
          '- **Data**: Apache Spark for large-scale data processing',
          'But tools are just tools. The real skill is knowing when to use what, and when to build custom solutions.',
          '## Distributed Training at Scale',
          'When training large models, single-GPU training wasn\'t cutting it. I implemented distributed training using PyTorch DDP (Distributed Data Parallel) that reduced training time for our largest model from 2 weeks to 3 days.',
          'This required careful optimization of:',
          '- Batch size and learning rate scheduling',
          '- Gradient accumulation and mixed precision training',
          '- Data loading and preprocessing pipeline',
          '- Network communication between GPUs',
          'The 40% reduction in training time meant faster iteration cycles and significant cost savings on compute.',
          '## Looking Forward',
          'We\'re now exploring exciting frontiers: vision transformers, self-supervised learning, and neural architecture search. The pace of innovation in ML is incredible, and being at the forefront is both challenging and exhilarating.',
          'But we never lose sight of the goal: building AI that helps real people solve real problems. Accuracy metrics matter, but user impact matters more.',
          '## Key Takeaways',
          'After two years in this role, here\'s what I\'ve learned:',
          '**Production ML is different from research ML**',
          'Latency, reliability, and maintainability matter as much as accuracy.',
          '**Communication is crucial**',
          'The best model in the world is useless if you can\'t explain why it works and why it matters.',
          '**Keep learning**',
          'This field moves fast. What was state-of-the-art last year is baseline today. Continuous learning isn\'t optional.',
          'If you\'re working on similar challenges or want to discuss ML engineering, I\'d love to connect. The best ideas come from exchanging perspectives with others in the field.'
        ],
        technologies: ['PyTorch', 'TensorFlow', 'Kubernetes', 'MLflow', 'AWS SageMaker', 'ONNX', 'Docker', 'Python'],
        images: [
          'https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjE4MDA0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2MTc5MzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ]
      }
    },
    {
      title: 'System Design Engineer',
      company: 'Kapxha Dynamics',
      period: 'Oct,2024 - Feb,2025',
      location: 'Jaipur, Rajasthan, India',
      description: 'Built real-time CV pipelines for detection, tracking, and recognition; boosted accuracy 20% via targeted augmentation + hyperparameter search (TensorFlow, PyTorch, OpenCV). Led AI-driven swarming for heterogeneous UAVs, trained multi-agent RL with graph-based coordination; added probabilistic target tracking and dynamic route optimization (OR-Tools/MILP) under energy/no-fly constraints.',
      detailedContent: {
        blogContent: [
          'Joining a FinTech startup as their third data scientist was like being thrown into the deep end – thrilling, overwhelming, and ultimately transformative. Every day brought new challenges, and every solution directly impacted the bottom line.',
          '## The Startup Reality',
          'Unlike large tech companies with mature data infrastructure, we were building everything from scratch. The data was messy, scattered across multiple systems, and often inconsistent. But that chaos was also an opportunity – I could shape how we approached data science from the ground up.',
          'My first priority was building a foundation that would scale. We couldn\'t afford technical debt when the company was growing 10x year-over-year.',
          '## Tackling Fraud Detection',
          'Our payment processing volume was exploding, and so was fraud. The existing rule-based system was generating thousands of false alarms daily, burning out our fraud review team and frustrating legitimate customers.',
          '[IMAGE:0]',
          'I proposed building a machine learning system that could learn fraud patterns automatically. The challenge was doing it with limited training data and extreme class imbalance – only 0.3% of transactions were fraudulent.',
          '### The Solution',
          'I built an XGBoost model with extensive feature engineering:',
          '- Transaction velocity features (frequency, amounts, locations)',
          '- Device fingerprinting and IP analysis',
          '- Merchant risk scores based on historical data',
          '- User behavior deviation metrics',
          '- Network graph features (connections between entities)',
          'The key insight was that fraudsters exhibit patterns across multiple dimensions. A single transaction might look normal, but patterns across time, network, and behavior often reveal fraud.',
          '> "The moment I knew we had something special was when the model caught a sophisticated fraud ring that had been operating undetected for months. The pattern was subtle – slight variations in transaction timing across multiple accounts – but the model spotted it."',
          'The results were dramatic: false positives dropped 35% while maintaining 99% detection rate. We saved $2M annually just in reduced operational costs from fewer false alarms.',
          '## Building Data Infrastructure',
          'As the company grew, so did our data needs. I designed and implemented a data pipeline using Apache Spark and AWS Redshift that could process 10M+ transactions daily.',
          'This wasn\'t just about technology – it required thinking through:',
          '- Data quality checks and validation',
          '- Schema evolution as product features changed',
          '- Privacy and compliance (PCI DSS, GDPR)',
          '- Performance optimization for real-time queries',
          'The pipeline became the foundation for all analytics and ML at the company.',
          '## Predicting Customer Churn',
          'Customer retention was critical for a subscription business. I built a churn prediction model that identified at-risk customers 30 days before they cancelled.',
          'The model analyzed:',
          '- Usage patterns (declining engagement is a strong signal)',
          '- Customer support interactions',
          '- Payment issues or failed transactions',
          '- Feature adoption (or lack thereof)',
          'But the real value came from making predictions actionable. I worked with the customer success team to design intervention strategies for different risk segments.',
          'The impact? We reduced churn by 18%, saving $2M annually in retention costs.',
          '## A/B Testing at Scale',
          'Every product decision was backed by data. I built an A/B testing framework that made experimentation easy for the product team.',
          'Key features:',
          '- Automated statistical significance calculations',
          '- Sequential testing to detect winners early',
          '- Multi-variant testing for complex experiments',
          '- Integration with analytics dashboard',
          'We ran over 200 experiments in two years, systematically optimizing every part of the user experience.',
          '## Communicating with Stakeholders',
          'One of the biggest challenges was translating complex data science into business insights. I learned to:',
          '- Focus on business impact, not model metrics',
          '- Use visualizations that tell a story',
          '- Provide actionable recommendations, not just analysis',
          '- Build trust by being honest about uncertainty',
          'My weekly analytics reports became must-read content for the exec team. They wanted data-driven insights, and I delivered them in a format they could act on.',
          '## The Startup Mindset',
          'Working at a startup taught me speed and pragmatism. Perfect is the enemy of good, and a working solution today beats a perfect solution next month.',
          'I learned to:',
          '- Prioritize ruthlessly (focus on highest impact work)',
          '- Build for iteration (start simple, improve over time)',
          '- Embrace good-enough solutions',
          '- Move fast without breaking things (automated testing is crucial)',
          'This mindset has stayed with me and influences how I approach every project.',
          '## Technical Growth',
          'I grew tremendously during these two years:',
          '- Mastered Python for data science (Pandas, NumPy, Scikit-learn)',
          '- Learned distributed computing with Spark',
          '- Built production data pipelines with Airflow',
          '- Created interactive dashboards with Tableau',
          '- Implemented ML models in production',
          'But the most valuable skill was learning to work across the stack – from data engineering to modeling to visualization to business impact.',
          '## Key Lessons',
          '**Impact over elegance**: The best solution is the one that actually gets deployed and drives results.',
          '**Communicate constantly**: Regular updates build trust and ensure your work aligns with business needs.',
          '**Build for scale**: Even if you\'re small now, design systems that can grow.',
          '**Collaborate cross-functionally**: The best insights come from combining data science with domain expertise.',
          'Looking back, this role was a masterclass in applied data science. The pace was intense, the stakes were high, and the learning was invaluable.'
        ],
        technologies: ['Python', 'Scikit-learn', 'XGBoost', 'SQL', 'Apache Spark', 'Tableau', 'AWS Redshift', 'Airflow'],
        images: [
          'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBjaGFydHN8ZW58MXx8fHwxNzYxNzcwNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ]
      }
    },
    {
      title: 'ML Engineer',
      company: 'Freelance',
      period: 'May, 2022 - Nov, 2023',
      location: 'Remote',
      description: 'As a Freelance Machine Learning Engineer, I have leveraged my expertise to deliver cutting-edge solutions for a diverse range of clients. From developing custom machine-learning models to optimizing existing algorithms and collaborating closely with clients, I have successfully implemented machine-learning solutions across various domains, contributing to their success and satisfaction.',
      detailedContent: {
        blogContent: [
          'My journey into AI research began in a small but prestigious university lab focused on medical imaging. As an intern, I had the privilege of working at the intersection of cutting-edge AI and life-saving healthcare applications.',
          '## The Research Environment',
          'Academic research is different from industry work. The pace is slower, but the depth is greater. Every decision needs to be justified, every experiment needs to be reproducible, and every result needs to be statistically significant.',
          'I loved it. The rigor forced me to think deeply about problems and develop a systematic approach to research.',
          '## My Research Project',
          'I was assigned to work on automated pneumonia detection from chest X-rays. The goal was ambitious: develop a deep learning system that could match or exceed radiologist performance.',
          'The dataset included 112,000 chest X-rays with labels indicating normal, bacterial pneumonia, or viral pneumonia. My task was to build a model that could classify these accurately.',
          '### Literature Review',
          'I spent the first month reading every relevant paper I could find. This taught me:',
          '- What architectures work best for medical imaging',
          '- Common pitfalls in medical ML (data leakage, selection bias)',
          '- How to properly evaluate model performance',
          '- The importance of interpretability in healthcare AI',
          'This foundation was invaluable throughout the project.',
          '## Building the Model',
          'I experimented with various CNN architectures – VGG, ResNet, DenseNet, EfficientNet. Each had different trade-offs between accuracy, speed, and parameter count.',
          'The best results came from an ensemble of ResNet-50 and DenseNet-121, achieving 92% accuracy on the test set.',
          '### Data Augmentation',
          'Medical images have unique properties that required custom augmentation:',
          '- Random rotations (±15 degrees)',
          '- Brightness and contrast adjustments',
          '- Elastic deformations',
          '- Zoom and crop',
          'But I had to be careful – some augmentations that work for natural images (like flipping) could change medical semantics.',
          '> "The breakthrough came when I implemented CLAHE (Contrast Limited Adaptive Histogram Equalization). Medical images often have subtle features, and enhancing local contrast made them visible to the model."',
          '## Understanding the Model',
          'In healthcare, model interpretability isn\'t optional – it\'s essential. Doctors need to trust AI recommendations, and trust requires understanding.',
          'I implemented Grad-CAM to visualize which regions of the X-ray influenced the model\'s decision. The heat maps were fascinating – the model was indeed looking at the right anatomical regions.',
          'This visualization became central to our paper, showing that the model wasn\'t just memorizing patterns but actually learning clinically relevant features.',
          '## Collaborating with Clinicians',
          'One of the most valuable aspects of this internship was working with actual radiologists. They provided insights that no amount of data could teach:',
          '- Which features matter for diagnosis',
          '- Common confounding factors (medical devices, patient positioning)',
          '- How to handle ambiguous cases',
          'Their domain expertise transformed my understanding of the problem.',
          '## Publishing the Research',
          'After months of work, we submitted our paper to a medical journal. The peer review process was intense – reviewers asked detailed questions about methodology, statistics, and clinical relevance.',
          'Through multiple rounds of revisions, the paper improved dramatically. We addressed concerns about:',
          '- Dataset bias and generalization',
          '- Statistical validation methods',
          '- Clinical applicability',
          '- Ethical considerations',
          'Seeing our paper finally published was incredible. This research could actually help patients.',
          '## Contributing to Open Source',
          'We open-sourced our preprocessing pipeline and model code. Within months, over 500 researchers had used it, and several papers cited our work.',
          'This taught me the value of open science – sharing tools and knowledge accelerates progress for everyone.',
          '## Technical Skills Gained',
          'This internship built my foundation in:',
          '- PyTorch for deep learning',
          '- Medical imaging formats (DICOM)',
          '- Statistical hypothesis testing',
          '- Data visualization with Matplotlib and seaborn',
          '- Version control and reproducible research practices',
          'But more important than any specific tool, I learned how to think like a researcher: question assumptions, test hypotheses, and draw rigorous conclusions.',
          '## The Ethics of Medical AI',
          'Working in healthcare AI exposed me to important ethical questions:',
          '- How do we ensure models don\'t perpetuate healthcare disparities?',
          '- What happens when AI makes a wrong diagnosis?',
          '- How do we balance automation with human expertise?',
          '- Who is responsible for AI-assisted medical decisions?',
          'These questions don\'t have easy answers, but grappling with them shaped my approach to AI development.',
          '## What I Learned',
          'This internship taught me that good AI research requires:',
          '**Rigor**: Every claim must be backed by evidence',
          '**Collaboration**: The best work combines multiple perspectives',
          '**Communication**: Research that can\'t be explained has limited impact',
          '**Patience**: Good science takes time',
          '**Purpose**: Focus on problems that matter',
          '## The Impact',
          'Our pneumonia detection model is now being tested in a clinical trial at a regional hospital. Seeing research move from paper to practice is the ultimate validation.',
          'This experience convinced me that AI has enormous potential in healthcare, and I\'m excited to continue working at this intersection in my career.',
          'If you\'re interested in medical imaging or AI research, I\'d love to discuss ideas and collaborate. The field is full of important problems waiting to be solved.'
        ],
        technologies: ['PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Jupyter', 'DICOM', 'Python']
      }
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering (AI/ML)',
      school: 'JECRC University',
      period: '2021 - 2025',
      description: 'Specialized in Machine Learning and Artificial Intelligence. GPA: 8.1/10',
    },
    {
      degree: 'High School Diploma',
      school: 'Ryan International School',
      period: '2018 - 2020',
      description: 'Focused on Science stream with Physics, Chemistry and Mathematics. Graduated with Honors.',
    },
  ];

  const handleExperienceClick = (experience: ExperienceItem) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="experience" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-yellow-500 mb-2 tracking-wider">EXPERIENCE</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-yellow-500" size={28} />
                <h3 className="text-white">Work Experience</h3>
              </div>
              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <Card 
                    key={index} 
                    className="bg-slate-900 border-slate-700 hover:border-yellow-500 transition-all cursor-pointer group"
                    onClick={() => handleExperienceClick(job)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-white mb-1 group-hover:text-yellow-500 transition-colors">{job.title}</h4>
                          <div className="text-yellow-500">{job.company}</div>
                        </div>
                        <span className="text-gray-400 text-sm bg-slate-800 px-3 py-1 rounded-full">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {job.description}
                      </p>
                      <div className="mt-4 text-yellow-500 text-sm group-hover:underline">
                        Click to read more →
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-yellow-500" size={28} />
                <h3 className="text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-slate-900 border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-white mb-1">{edu.degree}</h4>
                          <div className="text-yellow-500">{edu.school}</div>
                        </div>
                        <span className="text-gray-400 text-sm bg-slate-800 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={selectedExperience}
      />
    </>
  );
}
