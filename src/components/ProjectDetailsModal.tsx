
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  url: string;
}

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailsModal = ({ project, isOpen, onClose }: ProjectDetailsModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold flex items-center justify-between">
            {project.title}
            {project.url !== "#" && (
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-gray-600" />
              </a>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-contain bg-gray-50"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full">
              {project.category}
            </span>
            <span className="text-sm text-gray-500 font-medium">
              {project.year}
            </span>
          </div>
          
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
