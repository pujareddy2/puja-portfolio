import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Mail, Linkedin } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

interface OverlayProps {
  activeModule: string | null;
  onClose: () => void;
}

export function Overlay({ activeModule, onClose }: OverlayProps) {
  return (
    <AnimatePresence>
      {activeModule && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="glass-panel w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            <SystemHUD />
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
              <h2 className="text-2xl font-display text-white uppercase tracking-widest">
                {activeModule}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {activeModule === "ABOUT" && <AboutContent />}
              {activeModule === "PROJECTS" && <ProjectsContent />}
              {activeModule === "SKILLS" && <SkillsContent />}
              {activeModule === "EXPERIENCE" && <ExperienceContent />}
              {activeModule === "CERTIFICATIONS" && <CertificationsContent />}
              {activeModule === "CONTACT" && <ContactContent />}
              {activeModule === "ACHIEVEMENTS" && <AchievementsContent />}
              {activeModule === "RECRUITER" && <RecruiterContent />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SystemHUD() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/40" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/40" />

      {/* Coordinates */}
      <div className="absolute top-12 left-6 font-mono text-[8px] text-white/20 uppercase tracking-widest">
        LAT: 37.7749 N<br />
        LNG: 122.4194 W
      </div>
      <div className="absolute bottom-12 right-6 font-mono text-[8px] text-white/20 uppercase tracking-widest text-right">
        ALT: 42,000 FT<br />
        VEL: 28,000 KM/H
      </div>

      {/* Scanning Line */}
      <motion.div 
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-px bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}

function RecruiterContent() {
  return (
    <div className="space-y-12">
      <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] uppercase tracking-[0.3em] mb-8">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
        System Scan: Optimal Candidate Detected
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
          <p className="text-white/40 text-[10px] uppercase tracking-widest">Experience</p>
          <p className="text-2xl font-display text-white">1+ Year</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
          <p className="text-white/40 text-[10px] uppercase tracking-widest">Projects</p>
          <p className="text-2xl font-display text-white">10+ Built</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
          <p className="text-white/40 text-[10px] uppercase tracking-widest">Hackathons</p>
          <p className="text-2xl font-display text-white">3 Wins</p>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-white font-display text-sm uppercase tracking-widest">Quick Summary</h3>
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6">
          <p className="text-white/80 leading-relaxed">
            I am a Software Developer specialized in Generative AI and Full-Stack development. 
            I have a strong foundation in Python, React, and various AI frameworks. 
            My work focuses on building practical AI solutions that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-4 bg-white text-black font-display text-xs uppercase tracking-widest rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-3">
              <ExternalLink size={16} />
              Download Resume
            </button>
            <a 
              href={portfolioData.profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-white/10 border border-white/20 text-white font-display text-xs uppercase tracking-widest rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <Linkedin size={16} />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-white font-display text-sm uppercase tracking-widest">Key Strengths</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Rapid Prototyping with AI",
            "Full-Stack Architecture",
            "ML Model Integration",
            "Technical Problem Solving"
          ].map((strength) => (
            <div key={strength} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm text-white/80">{strength}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AchievementsContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {portfolioData.achievements.map((achievement, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-6 group hover:border-white/30 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white font-display text-xl group-hover:scale-110 transition-transform">
            {idx + 1}
          </div>
          <div className="space-y-1">
            <p className="text-lg text-white font-medium group-hover:text-white transition-colors">
              {achievement}
            </p>
            <div className="h-0.5 w-0 group-hover:w-full bg-white/20 transition-all duration-500" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function AboutContent() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-white font-display text-sm uppercase tracking-widest">Introduction</h3>
        <p className="text-lg leading-relaxed text-white/80">
          {portfolioData.profile.intro}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-white font-display text-sm uppercase tracking-widest">Profile</h3>
          <div className="space-y-2 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white/60 text-sm">Name: <span className="text-white">{portfolioData.profile.name}</span></p>
            <p className="text-white/60 text-sm">Role: <span className="text-white">{portfolioData.profile.role}</span></p>
            <p className="text-white/60 text-sm">Education: <span className="text-white">{portfolioData.profile.education}</span></p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-white font-display text-sm uppercase tracking-widest">Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {["Generative AI", "Machine Learning", "NLP", "Full Stack Development", "Data Analytics"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 border border-white/30 text-white text-[10px] rounded-full uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className="grid grid-cols-1 gap-12">
      {portfolioData.projects.map((project) => (
        <motion.div 
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all group relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-[100px] group-hover:bg-white/10 transition-all" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-display text-white group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-white/60 text-xs font-mono uppercase tracking-[0.2em]">
                {project.subtitle}
              </p>
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl hover:bg-white/20 text-white/60 hover:text-white transition-all border border-white/10 text-[10px] uppercase tracking-widest"
                >
                  <Github size={14} />
                  GitHub
                </a>
              )}
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-white/30 text-white hover:text-white transition-all border border-white/20 text-[10px] uppercase tracking-widest"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Overview</h4>
                <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
              </div>
              
              {project.features && (
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-white/60">
                        <div className="w-1 h-1 rounded-full bg-white mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {project.role && (
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase tracking-widest text-white/60 font-bold">My Role</h4>
                  <p className="text-xs text-white/50 leading-relaxed italic">{project.role}</p>
                </div>
              )}

              {project.architecture && (
                <div className="p-4 bg-black/40 rounded-xl border border-white/5 font-mono text-[10px] text-white/80">
                  <span className="text-white/40 block mb-2 uppercase tracking-widest">System Architecture</span>
                  {project.architecture}
                </div>
              )}

              <div className="space-y-3">
                <h4 className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 text-white/40 text-[9px] rounded uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(portfolioData.skills).map(([category, skills]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-white font-display text-sm uppercase tracking-widest border-l-2 border-white pl-3">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/80 text-xs rounded hover:border-white/50 hover:text-white transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceContent() {
  return (
    <div className="space-y-12 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-px before:bg-white/10">
      {portfolioData.experience.map((exp, idx) => (
        <div key={idx} className="relative pl-16">
          <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-bg-secondary border border-white/10 flex items-center justify-center z-10">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          </div>
          
          <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="space-y-1">
                <h3 className="text-xl font-display text-white group-hover:text-white transition-colors">{exp.company}</h3>
                <p className="text-white/80 text-sm font-medium tracking-wide">{exp.role}</p>
              </div>
              <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-white/40 uppercase tracking-widest border border-white/5">
                {exp.period}
              </span>
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed">{exp.description}</p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-white/5 text-white/60 text-[9px] rounded border border-white/10 uppercase tracking-tighter">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CertificationsContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {portfolioData.certifications.map((cert, idx) => (
        <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 transition-all flex items-center gap-4">
          <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white">
            <ExternalLink size={20} />
          </div>
          <span className="text-sm text-white/80">{cert}</span>
        </div>
      ))}
    </div>
  );
}

function ContactContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-glow-primary font-display text-sm uppercase">Get in Touch</h3>
          <p className="text-white/60 text-sm">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>
        <div className="space-y-4">
          <a href={`mailto:${portfolioData.profile.email}`} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-glow-primary/20 transition-all">
              <Mail size={20} className="text-white/60 group-hover:text-glow-primary" />
            </div>
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest">Email</p>
              <p className="text-white group-hover:text-glow-primary transition-colors">{portfolioData.profile.email}</p>
            </div>
          </a>
          <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-glow-primary/20 transition-all">
              <Linkedin size={20} className="text-white/60 group-hover:text-glow-primary" />
            </div>
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest">LinkedIn</p>
              <p className="text-white group-hover:text-glow-primary transition-colors">Puja Midde</p>
            </div>
          </a>
          <a href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-glow-primary/20 transition-all">
              <Github size={20} className="text-white/60 group-hover:text-glow-primary" />
            </div>
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest">GitHub</p>
              <p className="text-white group-hover:text-glow-primary transition-colors">pujareddy2</p>
            </div>
          </a>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); console.log("Form submitted"); }}>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Name</label>
          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-glow-primary/50 outline-none transition-all" placeholder="Your Name" required />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email</label>
          <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-glow-primary/50 outline-none transition-all" placeholder="your@email.com" required />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Message</label>
          <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-glow-primary/50 outline-none transition-all resize-none" placeholder="Your Message" required />
        </div>
        <button type="submit" className="w-full py-4 bg-glow-primary/20 border border-glow-primary/50 text-glow-primary font-display uppercase tracking-widest rounded-lg hover:bg-glow-primary hover:text-black transition-all duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
}
