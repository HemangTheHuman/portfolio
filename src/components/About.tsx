import { Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-yellow-500 mb-2 tracking-wider">ABOUT ME</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <ImageWithFallback
                src="src/components/images/20240609234626858.jpg"
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-gray-300">
            <h3 className="text-white mb-2">Hi There! I'm Hemang Joshi</h3>
            <div className="text-yellow-500 mb-6">AI/ML Engineer & Data Scientist</div>
            
            <p className="mb-8 leading-relaxed">
              Passionate about crafting data-driven solutions, I'm an AI/ML enthusiast skilled in machine learning, computer vision, and deep learning. With a proven track record, I've developed and implemented advanced algorithms to tackle intricate challenges. Actively seeking opportunities as a Machine Learning Intern or Engineer, my expertise includes TensorFlow, OpenCV, Python, and more. In my recent role as AI/ML Lead at JU MakerSpace, I orchestrated forums on AI and computer vision, contributing to structured frameworks. A B.Tech graduate in Computer Science and Engineering from JECRC University, my project highlights include accurate Anemia detection, robust Tumor Segmentation using CNNs, and successful implementation of BERT for text classification. Currently exploring roles as an ML Engineer, Computer Vision Engineer, AI Engineer, or Deep Learning Engineer, I am open to internships in related domains. Let's connect and discuss how my skills can contribute to your team's success in the dynamic field of AI and ML.
            </p>

            <div className="space-y-3 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-400">Birthday:</span>
                  <span className="ml-2 text-white">March 25, 2002</span>
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <span className="ml-2 text-white">+91 7976504161</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-400">Email:</span>
                  <span className="ml-2 text-white">work.hemang@gmail.com</span>
                </div>
              </div>
            </div>

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              <Download className="mr-2" size={18} />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
