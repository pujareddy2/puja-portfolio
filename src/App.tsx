import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scene } from "./components/3d/Scene";
import { Header } from "./components/ui/Header";
import { Overlay } from "./components/ui/Overlay";
import { BootScreen } from "./components/ui/BootScreen";

import { soundManager } from "./lib/sound";

export default function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    soundManager.init().catch(() => {});
    setHasStarted(true);
  };

  const handleModuleClick = (label: string) => {
    soundManager.play('CLICK');
    setActiveModule(label);
  };

  const handleCloseModule = () => {
    soundManager.play('TRANSITION');
    setActiveModule(null);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="scanline pointer-events-none" />
      <AnimatePresence>
        {!hasStarted && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black flex flex-col items-center justify-center p-8"
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl font-display text-white mb-16 tracking-[0.2em] text-center"
            >
              PUJA MIDDE
            </motion.h1>
            <button 
              onClick={handleStart}
              className="px-16 py-5 bg-white/5 border border-white/20 text-white font-display uppercase tracking-[0.4em] rounded-sm hover:bg-white hover:text-black transition-all duration-700"
            >
              INITIALIZE SYSTEM
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasStarted && !isBooted && <BootScreen onComplete={() => setIsBooted(true)} />}
      </AnimatePresence>

      {isBooted && (
        <>
          <Header onRecruiterClick={() => handleModuleClick("RECRUITER")} />
          
          <main className="w-full h-full">
            <Scene 
              activeModule={activeModule} 
              onModuleClick={handleModuleClick} 
            />
          </main>

          <Overlay 
            activeModule={activeModule} 
            onClose={handleCloseModule} 
          />
        </>
      )}
    </div>
  );
}
