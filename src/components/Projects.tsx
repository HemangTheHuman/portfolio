import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  date?: string;
  detailedContent?: {
    blogContent: string[];
    images?: string[];
  };
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: ProjectItem[] = [
    {
      title: 'In-Memory Object Streaming & DEM Generation from 2D Imagery',
      description: 'Prototyped streaming multi-GB satellite objects directly from cloud/object storage into system memory for near-real-time processing, then built a DEM workflow that augments 2D imagery with altitude to generate Digital Elevation Models for visualization and analytic pipelines. Conducted performance/feasibility analysis (latency, memory footprint, failure modes) and delivered a report with findings and recommendations for scaling to production ML/geoanalytics use cases.',
      image: 'https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbnxlbnwxfHx8fDE3NjE3NDEwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['PyTorch', 'Computer Vision', 'ResNet', 'Flask', 'Docker'],
      github: 'https://github.com',
      demo: 'https://example.com',
      date: 'January 2025 - June 2025',
      detailedContent: {
        blogContent: [
          'When I first started working on this project, I was driven by a simple question: Could artificial intelligence help save lives by detecting diseases earlier? This question led me down a fascinating path of combining deep learning with medical imaging, ultimately resulting in a system that\'s now being used in real hospitals.',
          '## The Challenge',
          'Medical image analysis has always been a bottleneck in healthcare. Radiologists spend hours each day reviewing X-rays, CT scans, and MRIs, looking for signs of disease. It\'s exhausting work that requires intense concentration, and even the best professionals can miss subtle indicators when they\'re fatigued.',
          'In many parts of the world, the shortage of qualified radiologists means that patients wait days or even weeks for their results. During my research phase, I spoke with several radiologists who shared their frustrations: the backlog of cases, the pressure to never miss anything, the weight of knowing that lives depend on their judgment.',
          '## Building the Solution',
          'I decided to approach this problem using deep learning, specifically convolutional neural networks (CNNs). The key insight was that while individual radiologists might get tired, a well-trained AI model could provide consistent, rapid analysis 24/7.',
          'The architecture I chose was based on ResNet-50, a proven model for image classification tasks. But medical imaging isn\'t quite the same as regular computer vision – X-rays have unique characteristics that required custom preprocessing and augmentation techniques.',
          '[IMAGE:0]',
          '### Data Preparation',
          'I started by curating a dataset of over 100,000 chest X-ray images from multiple sources. The data included cases of pneumonia, COVID-19, tuberculosis, and normal healthy lungs. One of the biggest challenges was ensuring the dataset was balanced and properly annotated – a crucial step that took weeks of careful validation.',
          'I implemented several preprocessing techniques specific to medical imaging, including CLAHE (Contrast Limited Adaptive Histogram Equalization) for enhancing contrast, and automated lung segmentation to help the model focus on the relevant regions.',
          '### Model Architecture',
          'The model uses transfer learning – starting with weights pre-trained on ImageNet and fine-tuning them on medical images. I added custom classifier heads and implemented focal loss to handle the class imbalance in the dataset. Training took place over 100 epochs using mixed-precision training on 4 NVIDIA V100 GPUs.',
          '> "The breakthrough moment came when I added Grad-CAM visualizations. Suddenly, we could see exactly where the model was looking, making it possible to verify that it was focusing on the right features – the same areas a radiologist would examine."',
          '[IMAGE:1]',
          '## Making it Interpretable',
          'One of my biggest concerns was the "black box" nature of deep learning. Doctors need to understand why a model makes a particular prediction. That\'s why I implemented gradient-weighted class activation mapping (Grad-CAM), which creates heat maps showing which parts of the X-ray influenced the model\'s decision.',
          'These attention visualizations became one of the most valuable features of the system. Radiologists could quickly see if the model was focusing on the right regions, and the heat maps often highlighted subtle features that might warrant closer human inspection.',
          '## Deployment and Impact',
          'After months of development and testing, we deployed the system in a pilot program at a regional hospital. The results exceeded our expectations. The model achieved 94% accuracy overall, with 92% sensitivity (correctly identifying diseased cases) and 96% specificity (correctly identifying healthy cases).',
          'But the real impact was measured in patient outcomes. The average time from X-ray to diagnosis dropped from 24 hours to just 30 minutes. The system processed over 5,000 X-rays in the first month, flagging 98% of critical cases correctly and enabling much faster treatment decisions.',
          '## Lessons Learned',
          'This project taught me that building AI for healthcare isn\'t just about achieving high accuracy – it\'s about building trust. The doctors using this system needed to understand it, verify it, and feel confident in its predictions. That\'s why the explainability features were just as important as the core model.',
          'I also learned the importance of working closely with domain experts. My initial model made some mistakes that seemed obvious to radiologists – like being confused by medical devices visible in the X-rays. Their feedback was invaluable in refining the system.',
          '## What\'s Next',
          'We\'re now working on expanding the system to detect additional conditions and integrating it more deeply into the hospital\'s workflow. The goal is to make it a seamless part of a radiologist\'s toolkit, not a replacement, but a powerful assistant that helps them work faster and catch things they might otherwise miss.',
          'If you\'re interested in the technical details or want to discuss medical AI applications, feel free to reach out. This project has been one of the most rewarding experiences of my career, and I\'m excited to see where it goes next.'
        ],
        images: [
          'https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjE4MDA0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBjaGFydHN8ZW58MXx8fHwxNzYxNzcwNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ]
      }
    },
    {
      title: 'Multi-Mission Interactive Archives for Indian Remote Sensing Satellite Data',
      description: 'developed an end-to-end, on-prem archival platform for high-throughput satellite datasets using Apache Kafka and Quantum ActiveScale. Instrumented event streams to track ingestion and every object-lifecycle action (create/update/delete/access), producing a full audit trail and data lineage for downstream ML/analytics. Delivered a real-time ops/security dashboard to monitor throughput, failures, and SLA compliance in a hardened, high-speed environment, enabling reliable, observable pipelines for geospatial data science.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE4MDQ0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'XGBoost', 'Apache Kafka', 'Redis', 'AWS'],
      github: 'https://github.com',
      date: 'January 2025 - June 2025',
      detailedContent: {
        blogContent: [
          'Fraud detection at scale is one of the most challenging problems in fintech. Every millisecond matters, every false positive costs money, and every missed fraud case can mean thousands of dollars in losses. This is the story of how I built a real-time ML system that processes over 10 million transactions daily while maintaining sub-100ms latency.',
          '## The Problem Space',
          'When I joined the payment processing company, they were using a rule-based fraud detection system that had been patched and updated over years. The result? A system that flagged 20% of transactions as potentially fraudulent – but 80% of those flags were false positives.',
          'Think about that for a moment. Legitimate customers were having their cards declined at checkout, calling customer support in frustration, and sometimes abandoning their purchases altogether. Meanwhile, sophisticated fraudsters who understood the rules were still slipping through.',
          '## Rethinking the Approach',
          'I proposed a complete overhaul: instead of hand-crafted rules, we would use machine learning to learn the patterns of fraud from data. But this wasn\'t going to be a simple scikit-learn model – we needed something that could make decisions in real-time, at massive scale, with explainable outputs.',
          '[IMAGE:0]',
          '### The Architecture',
          'The system I designed uses a streaming architecture built on Apache Kafka. When a transaction comes in, it flows through a pipeline that:',
          '1. Extracts features from the raw transaction data',
          '2. Enriches it with historical user behavior from Redis',
          '3. Computes velocity features (how many transactions in the last hour, etc.)',
          '4. Analyzes network patterns (is this device associated with known fraud?)',
          '5. Scores it using an ensemble of ML models',
          'All of this happens in less than 100 milliseconds.',
          '## Feature Engineering: The Secret Sauce',
          'The models are important, but I\'d argue that feature engineering is where the real magic happens. I created over 200 derived features, including:',
          '- Velocity features: transaction frequency, amount patterns',
          '- Network analysis: device fingerprinting, IP geolocation',
          '- Behavioral patterns: deviation from user\'s typical behavior',
          '- Merchant risk scores: historical fraud rates for each merchant',
          '- Time-based features: is this an unusual time for this user?',
          '> "The best feature I engineered was what I called the "behavioral consistency score" – a measure of how much a transaction resembles a user\'s historical patterns. This single feature improved our model\'s precision by 8%."',
          '### The Model Ensemble',
          'Rather than relying on a single model, I built an ensemble combining XGBoost, Random Forest, and a neural network. Each model has different strengths: XGBoost excels at capturing non-linear interactions, Random Forest provides robustness, and the neural network can learn complex patterns.',
          'The ensemble is weighted based on each model\'s historical performance, and I implemented a custom loss function that heavily penalizes false negatives (missed fraud) while still controlling false positives.',
          '## Handling Imbalanced Data',
          'Fraud is rare – typically less than 0.5% of transactions. This extreme class imbalance makes training tricky. I used a combination of SMOTE (Synthetic Minority Over-sampling Technique) and class weighting to ensure the models learned to recognize fraud despite its rarity.',
          '## Making it Explainable',
          'Banks and merchants need to understand why a transaction was flagged. I integrated SHAP (SHapley Additive exPlanations) values into the system, providing clear explanations for each decision. This transparency was crucial for gaining trust and meeting regulatory requirements.',
          '## The Results',
          'After three months of development and rigorous testing, we rolled out the new system. The impact was immediate and dramatic:',
          '- False positive rate dropped from 20% to 4%',
          '- Fraud detection rate increased to 99.2%',
          '- Customer support tickets related to declined transactions decreased by 60%',
          '- Estimated annual savings: $15M',
          'The system now processes over 10 million transactions daily across 50+ countries, maintaining 99.99% uptime.',
          '## Continuous Learning',
          'Fraud patterns evolve constantly, so the system can\'t be static. I built an automated retraining pipeline using Apache Airflow that:',
          '- Monitors model performance in real-time',
          '- Detects distribution drift',
          '- Automatically triggers retraining when needed',
          '- Uses A/B testing to validate new models before full deployment',
          'This means the system gets smarter over time, adapting to new fraud tactics without manual intervention.',
          '## Reflections',
          'Building production ML systems is fundamentally different from building research models. Latency matters. Explainability matters. Monitoring and maintenance matter. This project taught me to think beyond accuracy metrics and consider the entire system lifecycle.',
          'If you\'re working on similar problems or want to discuss real-time ML systems, I\'d love to connect. The intersection of machine learning and production systems is endlessly fascinating.'
        ],
        images: [
          'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBjaGFydHN8ZW58MXx8fHwxNzYxNzcwNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ]
      }
    },
    {
      title: 'AI-Driven Swarm Coordination for Heterogeneous UAVs (Target Tracking & Route Optimization)',
      description: 'Built an AI-first swarm stack for mixed UAV fleets (multirotor + fixed-wing) to cooperatively detect, track, and service moving targets. Trained multi-agent reinforcement learning (MARL) policies for decentralized task allocation and formation control, and modeled inter-UAV communication/topology with graph neural networks for scalable coordination. Implemented probabilistic target tracking via sensor fusion to handle noisy, intermittent detections with real-time replanning. Delivered reproducible Python notebooks, PyTorch training/evaluation pipelines, and dashboards to compare learned policies against heuristic baselines, improving intercept time and energy efficiency in simulation while enforcing collision-avoidance.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2MTc5MzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Transformers', 'BERT', 'FastAPI', 'PostgreSQL', 'React'],
      github: 'https://github.com',
      demo: 'https://example.com',
      date: 'October 2024 - February 2025',
      detailedContent: {
        blogContent: [
          'Customer support is expensive, time-consuming, and often frustrating for everyone involved. When I was approached to build an AI chatbot that could actually help customers (not just annoy them with canned responses), I knew this would be a challenging but rewarding project.',
          '## Understanding the Problem',
          'The company I worked with was receiving over 20,000 support tickets monthly. Their support team was overwhelmed, with average response times of 4 hours and customer satisfaction scores steadily declining. But here\'s the thing – about 70% of those tickets were asking the same basic questions.',
          '"How do I reset my password?" "Where is my order?" "How do I cancel my subscription?"',
          'These repetitive queries were drowning the support team, preventing them from focusing on the complex issues that actually required human expertise.',
          '## Designing a Smarter Chatbot',
          'I\'ve seen plenty of terrible chatbots that frustrate users more than they help. I was determined to build something different – a system that could understand natural language, provide accurate information, and know when to hand off to a human.',
          '[IMAGE:0]',
          '### The Two-Stage Pipeline',
          'The architecture I designed works in two stages:',
          '**Stage 1: Understanding Intent**',
          'Using a fine-tuned BERT model, the system first classifies the user\'s intent. Are they asking about billing? Technical support? Account management? I trained this on 50,000 annotated support conversations, achieving 96% accuracy across 50+ different intent categories.',
          '**Stage 2: Generating Responses**',
          'Once we know what the user wants, a fine-tuned GPT model generates a contextual response. But here\'s the key innovation: I implemented retrieval-augmented generation (RAG) using a vector database. This means responses are grounded in actual company documentation, not hallucinated by the model.',
          '## Training on Real Conversations',
          'The training data was gold – 50,000 real customer support conversations, including both good and bad examples. I spent weeks cleaning and annotating this data, categorizing intents, extracting entities (like order numbers and account IDs), and identifying which conversations required human escalation.',
          '### Named Entity Recognition',
          'I used spaCy to build a custom NER system that could extract key information from user messages:',
          '- Order numbers',
          '- Product names',
          '- Email addresses',
          '- Account identifiers',
          'This allowed the chatbot to automatically pull up relevant information from the database and provide personalized responses.',
          '> "The moment I knew we had something special was when a user asked a complex, multi-part question and the chatbot not only understood it but broke down the answer into clear steps. The user\'s response? \'Wow, this is actually helpful.\'"',
          '## Knowing When to Escalate',
          'The smartest thing an AI can do is recognize its limitations. I built a confidence scoring system that evaluates:',
          '- How confident is the intent classifier?',
          '- How well does the query match our knowledge base?',
          '- Is this a complex issue requiring human judgment?',
          'If confidence is low, the system smoothly hands off to a human agent, providing them with the conversation context so they don\'t have to start from scratch.',
          '## Multi-Language Support',
          'The company operates globally, so I added support for English, Spanish, and French. Using multilingual BERT models and translation APIs, the system can understand queries in any of these languages and respond appropriately.',
          '## The Impact',
          'After a gradual rollout and testing period, the results exceeded everyone\'s expectations:',
          '- 70% of queries handled without human intervention',
          '- Average response time: 30 seconds (down from 4 hours)',
          '- Customer satisfaction increased from 3.2 to 4.5 out of 5',
          '- Support costs reduced by $3.5M annually',
          '- 15,000+ conversations handled daily',
          'But the most rewarding feedback came from the support team themselves. They were initially worried about being replaced, but instead found they could finally focus on interesting, complex problems rather than answering the same basic questions all day.',
          '## Technical Challenges',
          'Building this wasn\'t just about training models. I had to solve several engineering challenges:',
          '**Latency:** Users expect instant responses. I used caching, optimized model inference, and deployed on AWS Lambda for auto-scaling.',
          '**Conversation State:** Supporting multi-turn conversations required sophisticated state management using Redis.',
          '**Integration:** The chatbot needed to interface with multiple backend systems – CRM, order database, knowledge base, ticketing system.',
          '## Continuous Improvement',
          'The system includes a feedback mechanism where users can rate responses. This data feeds back into the training pipeline, allowing the models to continuously improve. I also built analytics dashboards showing:',
          '- Which topics generate the most queries',
          '- Where the bot struggles (low confidence scores)',
          '- User satisfaction trends',
          '- Escalation patterns',
          'This data helps the team continuously refine both the AI and the underlying documentation.',
          '## Lessons Learned',
          'This project taught me that good AI products require more than good models. They require:',
          '- Deep understanding of the use case',
          '- Careful attention to UX',
          '- Graceful failure modes',
          '- Continuous monitoring and improvement',
          'Most importantly, I learned that AI should augment humans, not replace them. The best outcomes came from finding the right balance between automation and human expertise.',
          'If you\'re building NLP systems or working on similar problems, I\'d love to hear about your experiences. The field is moving incredibly fast, and there\'s always more to learn.'
        ],
        images: [
          'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2MTc5MzQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ]
      }
    },
    {
      title: 'Satellite Image City-Block Detection for Urban Planning',
      description: 'Developed and trained a CNN (TensorFlow Object Detection API) on high-resolution satellite imagery to automatically detect city blocks, enabling faster infrastructure mapping and decision support for planners; achieved 90% accuracy in downstream urban-development analyses. Integrated geospatial tooling to streamline labeling, inference, and review',
      image: 'https://images.unsplash.com/photo-1717501220725-83f151c447e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhbGdvcml0aG18ZW58MXx8fHwxNzYxNzcwMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Prophet', 'LSTM', 'Plotly', 'Streamlit', 'Pandas'],
      github: 'https://github.com',
      demo: 'https://example.com',
      date: 'Aug 2023 - Feb 2024',
      detailedContent: {
        blogContent: [
          'Most analytics dashboards tell you what happened. But what if they could tell you what\'s going to happen? That was the premise behind this project – building a predictive analytics platform that gives businesses a crystal ball (well, as close as machine learning can get).',
          '## The Vision',
          'Business stakeholders were drowning in historical data but starving for insights about the future. They had beautiful dashboards showing last month\'s sales, last quarter\'s churn, last year\'s growth – but when it came to planning for tomorrow, they were flying blind.',
          'I wanted to change that by building a platform that seamlessly blends descriptive analytics (what happened) with predictive analytics (what will happen) in a way that non-technical users could actually understand and use.',
          '## Building the Foundation',
          'The first challenge was data integration. The company\'s data was scattered across multiple systems – Salesforce for CRM, Google Analytics for web traffic, their own PostgreSQL database for transactions. I built a data pipeline that consolidated everything into a centralized data warehouse.',
          '[IMAGE:0]',
          '### Time Series Forecasting',
          'For sales forecasting, I used Facebook Prophet, a powerful time series model that handles seasonality, holidays, and trend changes automatically. But I didn\'t stop there – I combined Prophet with LSTM neural networks for scenarios where deep learning could capture complex temporal patterns that traditional statistical models might miss.',
          'The ensemble approach gave us the best of both worlds: Prophet\'s interpretability and robustness to missing data, plus LSTM\'s ability to learn intricate patterns.',
          '## Predicting Customer Churn',
          'Churn prediction was one of the most valuable features. I built a classification model using XGBoost that analyzes:',
          '- Usage patterns (declining engagement is a strong signal)',
          '- Customer support interactions',
          '- Billing history',
          '- Product feature adoption',
          '- Demographic information',
          'The model doesn\'t just predict who will churn – it ranks customers by risk and identifies the top contributing factors for each prediction. This actionable insight allows the retention team to proactively reach out with targeted interventions.',
          '> "The VP of Customer Success told me that churn predictions changed how her entire team operates. Instead of reacting to cancellations, they now prevent them before they happen."',
          '[IMAGE:1]',
          '## Making Predictions Actionable',
          'Predictions are only valuable if people can act on them. I designed the interface with this in mind:',
          '**What-If Analysis**',
          'Users can adjust variables (like marketing spend or pricing) and see how it affects forecasts. This turns the dashboard into a strategic planning tool.',
          '**Automated Alerts**',
          'The system monitors for anomalies and sends alerts when metrics deviate from expected patterns. No more waiting for monthly reports to discover problems.',
          '**Confidence Intervals**',
          'Every prediction includes uncertainty estimates. I believe in honest AI – users should know when the model is confident and when it\'s less certain.',
          '## Technical Implementation',
          'I built the backend using Python, with separate microservices for:',
          '- Data ingestion and ETL',
          '- Model training and versioning',
          '- Real-time inference',
          '- API serving',
          'The frontend uses Streamlit, which allowed rapid development of an interactive, polished interface without needing a separate frontend team.',
          '### Model Management',
          'As the system grew, managing multiple models became complex. I implemented MLflow for:',
          '- Experiment tracking',
          '- Model versioning',
          '- Performance monitoring',
          '- A/B testing of model updates',
          'This infrastructure meant we could continuously improve models without disrupting the user experience.',
          '## Handling Seasonality',
          'One of the trickiest aspects of forecasting is seasonality. Retail sales spike during holidays, SaaS signups surge at fiscal year-end, usage patterns change with the school year. I built custom seasonality components for each metric, including:',
          '- Weekly patterns (Tuesday spikes, weekend lulls)',
          '- Monthly patterns (end-of-month billing cycles)',
          '- Yearly patterns (holiday seasons, summer slowdowns)',
          '- Custom business events (product launches, marketing campaigns)',
          '## The Results',
          'After six months of use, the impact was measurable:',
          '- Demand forecasting accuracy improved from 70% to 87%',
          '- Inventory costs reduced by $2M through better planning',
          '- Churn prevention saved $1.5M in retention costs',
          '- Marketing ROI increased by 35% through better budget allocation',
          '- 150+ daily active users across the organization',
          'But the real success metric was adoption. The platform became the go-to tool for strategic planning meetings, replacing gut-feel decisions with data-driven forecasts.',
          '## Continuous Learning',
          'Forecasting models need constant attention. I built an automated backtesting framework that:',
          '- Evaluates forecast accuracy weekly',
          '- Identifies when models start degrading',
          '- Triggers retraining automatically',
          '- Compares new models against current production models',
          'This ensures the forecasts stay accurate as business conditions change.',
          '## Lessons in Product Design',
          'Building this dashboard taught me that ML products need to be designed for humans, not algorithms. Key lessons:',
          '**Keep it Simple**',
          'I initially built complex visualizations with dozens of metrics. Users were overwhelmed. The final version focuses on the few metrics that matter most.',
          '**Make it Fast**',
          'Users won\'t use a tool that takes minutes to load. I optimized everything for sub-second response times, even for complex forecasts.',
          '**Build Trust Gradually**',
          'People don\'t trust black-box predictions. I included explanations, confidence intervals, and the ability to drill down into model details.',
          '## What\'s Next',
          'We\'re now expanding the platform to include:',
          '- Recommendations for specific actions (not just predictions)',
          '- Deeper integration with operational systems',
          '- Natural language querying (ask questions in plain English)',
          '- Collaborative features for sharing insights',
          'The goal is to make predictive analytics as ubiquitous and easy to use as checking email.',
          'If you\'re working on similar projects or want to discuss predictive analytics, reach out. I\'m always excited to learn from others in this space.'
        ],
        images: [
          'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE4MDQ0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBjaGFydHN8ZW58MXx8fHwxNzYxNzcwNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ]
      }
    },
    {
      title: 'Campus Security Camera Monitoring System with Automated AI Deployment',
      description: 'Built an AI-powered surveillance solution for real-time activity tracking and attendance monitoring using Computer Vision and Deep Learning. Orchestrated end-to-end MLOps with CI/CD and Docker to continuously ship upgraded detection features, improving attendance accuracy to 85% and cutting deployment time by 40% in production-like conditions.',
      image: 'https://images.unsplash.com/photo-1717501220725-83f151c447e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhbGdvcml0aG18ZW58MXx8fHwxNzYxNzcwMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Prophet', 'LSTM', 'Plotly', 'Streamlit', 'Pandas'],
      github: 'https://github.com',
      demo: 'https://example.com',
      date: 'Apr 2023 - Sep 2023',
      detailedContent: {
        blogContent: [
          'Most analytics dashboards tell you what happened. But what if they could tell you what\'s going to happen? That was the premise behind this project – building a predictive analytics platform that gives businesses a crystal ball (well, as close as machine learning can get).',
          '## The Vision',
          'Business stakeholders were drowning in historical data but starving for insights about the future. They had beautiful dashboards showing last month\'s sales, last quarter\'s churn, last year\'s growth – but when it came to planning for tomorrow, they were flying blind.',
          'I wanted to change that by building a platform that seamlessly blends descriptive analytics (what happened) with predictive analytics (what will happen) in a way that non-technical users could actually understand and use.',
          '## Building the Foundation',
          'The first challenge was data integration. The company\'s data was scattered across multiple systems – Salesforce for CRM, Google Analytics for web traffic, their own PostgreSQL database for transactions. I built a data pipeline that consolidated everything into a centralized data warehouse.',
          '[IMAGE:0]',
          '### Time Series Forecasting',
          'For sales forecasting, I used Facebook Prophet, a powerful time series model that handles seasonality, holidays, and trend changes automatically. But I didn\'t stop there – I combined Prophet with LSTM neural networks for scenarios where deep learning could capture complex temporal patterns that traditional statistical models might miss.',
          'The ensemble approach gave us the best of both worlds: Prophet\'s interpretability and robustness to missing data, plus LSTM\'s ability to learn intricate patterns.',
          '## Predicting Customer Churn',
          'Churn prediction was one of the most valuable features. I built a classification model using XGBoost that analyzes:',
          '- Usage patterns (declining engagement is a strong signal)',
          '- Customer support interactions',
          '- Billing history',
          '- Product feature adoption',
          '- Demographic information',
          'The model doesn\'t just predict who will churn – it ranks customers by risk and identifies the top contributing factors for each prediction. This actionable insight allows the retention team to proactively reach out with targeted interventions.',
          '> "The VP of Customer Success told me that churn predictions changed how her entire team operates. Instead of reacting to cancellations, they now prevent them before they happen."',
          '[IMAGE:1]',
          '## Making Predictions Actionable',
          'Predictions are only valuable if people can act on them. I designed the interface with this in mind:',
          '**What-If Analysis**',
          'Users can adjust variables (like marketing spend or pricing) and see how it affects forecasts. This turns the dashboard into a strategic planning tool.',
          '**Automated Alerts**',
          'The system monitors for anomalies and sends alerts when metrics deviate from expected patterns. No more waiting for monthly reports to discover problems.',
          '**Confidence Intervals**',
          'Every prediction includes uncertainty estimates. I believe in honest AI – users should know when the model is confident and when it\'s less certain.',
          '## Technical Implementation',
          'I built the backend using Python, with separate microservices for:',
          '- Data ingestion and ETL',
          '- Model training and versioning',
          '- Real-time inference',
          '- API serving',
          'The frontend uses Streamlit, which allowed rapid development of an interactive, polished interface without needing a separate frontend team.',
          '### Model Management',
          'As the system grew, managing multiple models became complex. I implemented MLflow for:',
          '- Experiment tracking',
          '- Model versioning',
          '- Performance monitoring',
          '- A/B testing of model updates',
          'This infrastructure meant we could continuously improve models without disrupting the user experience.',
          '## Handling Seasonality',
          'One of the trickiest aspects of forecasting is seasonality. Retail sales spike during holidays, SaaS signups surge at fiscal year-end, usage patterns change with the school year. I built custom seasonality components for each metric, including:',
          '- Weekly patterns (Tuesday spikes, weekend lulls)',
          '- Monthly patterns (end-of-month billing cycles)',
          '- Yearly patterns (holiday seasons, summer slowdowns)',
          '- Custom business events (product launches, marketing campaigns)',
          '## The Results',
          'After six months of use, the impact was measurable:',
          '- Demand forecasting accuracy improved from 70% to 87%',
          '- Inventory costs reduced by $2M through better planning',
          '- Churn prevention saved $1.5M in retention costs',
          '- Marketing ROI increased by 35% through better budget allocation',
          '- 150+ daily active users across the organization',
          'But the real success metric was adoption. The platform became the go-to tool for strategic planning meetings, replacing gut-feel decisions with data-driven forecasts.',
          '## Continuous Learning',
          'Forecasting models need constant attention. I built an automated backtesting framework that:',
          '- Evaluates forecast accuracy weekly',
          '- Identifies when models start degrading',
          '- Triggers retraining automatically',
          '- Compares new models against current production models',
          'This ensures the forecasts stay accurate as business conditions change.',
          '## Lessons in Product Design',
          'Building this dashboard taught me that ML products need to be designed for humans, not algorithms. Key lessons:',
          '**Keep it Simple**',
          'I initially built complex visualizations with dozens of metrics. Users were overwhelmed. The final version focuses on the few metrics that matter most.',
          '**Make it Fast**',
          'Users won\'t use a tool that takes minutes to load. I optimized everything for sub-second response times, even for complex forecasts.',
          '**Build Trust Gradually**',
          'People don\'t trust black-box predictions. I included explanations, confidence intervals, and the ability to drill down into model details.',
          '## What\'s Next',
          'We\'re now expanding the platform to include:',
          '- Recommendations for specific actions (not just predictions)',
          '- Deeper integration with operational systems',
          '- Natural language querying (ask questions in plain English)',
          '- Collaborative features for sharing insights',
          'The goal is to make predictive analytics as ubiquitous and easy to use as checking email.',
          'If you\'re working on similar projects or want to discuss predictive analytics, reach out. I\'m always excited to learn from others in this space.'
        ],
        images: [
          'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE4MDQ0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBjaGFydHN8ZW58MXx8fHwxNzYxNzcwNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        ]
      }
    },
  ];

  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-yellow-500 mb-2 tracking-wider">MY PROJECTS</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
            
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-slate-800 border-slate-700 overflow-hidden hover:border-yellow-500 transition-all cursor-pointer group"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/90 px-3 py-1 rounded-full text-yellow-500 text-sm">
                    {project.date}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-white mb-3 group-hover:text-yellow-500 transition-colors">{project.title}</h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-slate-700 text-yellow-500 hover:bg-slate-600"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-yellow-500 text-sm group-hover:underline">
                    Click to read full case study →
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </>
  );
}
