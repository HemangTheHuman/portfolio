import { Dialog, DialogPortal, DialogOverlay, DialogTitle, DialogDescription } from './ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog@1.1.6';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Github, ExternalLink, Calendar, X } from 'lucide-react';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
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
  } | null;
}

export function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <div className="relative w-full h-full max-w-[1400px] bg-slate-900 border border-slate-700 rounded-lg overflow-hidden flex flex-col">
            {/* Accessibility elements (hidden) */}
            <DialogTitle className="sr-only">{project.title}</DialogTitle>
            <DialogDescription className="sr-only">{project.description}</DialogDescription>
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 md:right-6 md:top-6 z-50 rounded-full p-2 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <X className="h-5 w-5 text-gray-400" />
              <span className="sr-only">Close</span>
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1">
              <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16">
                {/* Blog Header */}
                <div className="mb-8">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                    {project.date && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{project.date}</span>
                      </div>
                    )}
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400">8 min read</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-white mb-6">{project.title}</h1>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-slate-800 text-yellow-500 border border-slate-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-12 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                {/* Blog Content */}
                {project.detailedContent && (
                  <article className="prose prose-invert prose-lg max-w-none">
                    {project.detailedContent.blogContent.map((paragraph, index) => {
                      // Check if this is an image marker
                      if (paragraph.startsWith('[IMAGE:') && paragraph.endsWith(']')) {
                        const imageIndex = parseInt(paragraph.match(/\d+/)?.[0] || '0');
                        const imageUrl = project.detailedContent?.images?.[imageIndex];
                        
                        if (imageUrl) {
                          return (
                            <div key={index} className="my-8 rounded-lg overflow-hidden">
                              <ImageWithFallback
                                src={imageUrl}
                                alt={`Illustration ${imageIndex + 1}`}
                                className="w-full h-[500px] object-cover"
                              />
                            </div>
                          );
                        }
                        return null;
                      }
                      
                      // Check if this is a heading (starts with ##)
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h2 key={index} className="text-white mt-12 mb-6">
                            {paragraph.replace('## ', '')}
                          </h2>
                        );
                      }
                      
                      // Check if this is a subheading (starts with ###)
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={index} className="text-white mt-8 mb-4">
                            {paragraph.replace('### ', '')}
                          </h3>
                        );
                      }

                      // Check if this is a quote (starts with >)
                      if (paragraph.startsWith('> ')) {
                        return (
                          <blockquote key={index} className="border-l-4 border-yellow-500 pl-6 my-8 italic text-gray-300">
                            {paragraph.replace('> ', '')}
                          </blockquote>
                        );
                      }
                      
                      // Regular paragraph
                      return (
                        <p key={index} className="text-gray-300 leading-relaxed mb-6">
                          {paragraph}
                        </p>
                      );
                    })}
                  </article>
                )}

                {/* Divider */}
                <div className="border-t border-slate-700 my-12"></div>

                {/* Footer */}
                <div className="text-center text-gray-400 pb-8">
                  <p>Thanks for reading! Feel free to reach out if you have any questions.</p>
                </div>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
