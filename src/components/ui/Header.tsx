import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Volume2, VolumeX, User } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../../data/portfolio";

interface HeaderProps {
  onRecruiterClick: () => void;
}

import { soundManager } from "../../lib/sound";

export function Header({ onRecruiterClick }: HeaderProps) {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    soundManager.setMuted(newMuted);
    soundManager.play('CLICK');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="pointer-events-auto flex items-center gap-4"
      >
        <h1 className="text-sm font-display tracking-[0.3em] uppercase text-white/80">
          Puja Midde
        </h1>
      </motion.div>

      <div className="flex items-center gap-6 pointer-events-auto">
        <button 
          onClick={onRecruiterClick}
          className="px-6 py-3 bg-white text-black font-display text-[10px] uppercase tracking-[0.3em] rounded-full hover:bg-white/90 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          <User size={16} />
          Recruiter View
        </button>

        <div className="flex items-center gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl shadow-2xl group transition-all hover:bg-white/10">
          <div className="flex items-center gap-4">
            <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href={`mailto:${portfolioData.profile.email}`} className="text-white/40 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
          <div className="w-px h-6 bg-white/10 mx-2" />
          <button 
            onClick={toggleMute}
            className="flex items-center gap-3 group/btn"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover/btn:text-white transition-colors">
              {isMuted ? 'Audio Off' : 'Audio On'}
            </span>
            <div className={`p-2 rounded-full transition-all ${isMuted ? 'bg-white/5 text-white/20' : 'bg-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]'}`}>
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
