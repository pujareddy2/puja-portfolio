import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

interface RecruiterViewProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterView({ isOpen, onClose }: RecruiterViewProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-display text-glow-primary uppercase tracking-widest">
                  {portfolioData.profile.name}
                </h2>
                <p className="text-white/60 font-mono text-sm uppercase tracking-widest">
                  {portfolioData.profile.role}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="text-[10px] uppercase tracking-widest text-glow-primary mb-2">Education</h3>
                  <p className="text-xs text-white/80 leading-relaxed">{portfolioData.profile.education}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="text-[10px] uppercase tracking-widest text-glow-primary mb-2">Key Focus</h3>
                  <p className="text-xs text-white/80 leading-relaxed">GenAI, NLP, ML Pipelines, Full-Stack AI</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-glow-primary border-b border-glow-primary/20 pb-2">Top Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "FastAPI", "React", "Gemini AI", "NLP", "ML Training", "Power BI"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-white/60 rounded uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-glow-primary border-b border-glow-primary/20 pb-2">Top Projects</h3>
                <div className="space-y-3">
                  {portfolioData.projects.slice(0, 3).map(project => (
                    <div key={project.id} className="flex justify-between items-center">
                      <span className="text-sm text-white/80">{project.title}</span>
                      <span className="text-[10px] text-white/40 uppercase font-mono">{project.subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex-1 py-4 bg-glow-primary text-black font-display text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2">
                  <Download size={16} />
                  Download Resume
                </button>
                <div className="flex gap-4 justify-center items-center">
                  <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-lg hover:bg-glow-primary/20 text-white/60 hover:text-glow-primary transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-lg hover:bg-glow-primary/20 text-white/60 hover:text-glow-primary transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
