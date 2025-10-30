import { Brain, LineChart, Database, Code2, Cpu, FlaskConical } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Skills() {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Developing supervised and unsupervised learning models using scikit-learn, XGBoost, and ensemble methods.',
    },
    {
      icon: Cpu,
      title: 'Deep Learning',
      description: 'Building neural networks with PyTorch and TensorFlow for computer vision, NLP, and time series analysis.',
    },
    {
      icon: LineChart,
      title: 'Data Analysis',
      description: 'Statistical analysis, exploratory data analysis, and creating insightful visualizations with Python and R.',
    },
    {
      icon: Database,
      title: 'Big Data Processing',
      description: 'Processing large-scale datasets using Apache Spark, distributed computing, and cloud data platforms.',
    },
    {
      icon: FlaskConical,
      title: 'MLOps & Deployment',
      description: 'Deploying ML models to production with Docker, Kubernetes, MLflow, and cloud services (AWS, GCP).',
    },
    {
      icon: Code2,
      title: 'Data Engineering',
      description: 'Building ETL pipelines, data warehouses, and ensuring data quality for ML applications.',
    },
  ];



  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 mb-2 tracking-wider">SKILLS & EXPERTISE</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-slate-900 border-slate-700 hover:border-yellow-500 transition-colors group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors">
                    <Icon className="text-yellow-500 group-hover:text-slate-900 transition-colors" size={28} />
                  </div>
                  <h4 className="text-white mb-3">{service.title}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
