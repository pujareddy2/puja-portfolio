import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const messages = [
    "ESTABLISHING SECURE CONNECTION...",
    "AUTHENTICATING USER CREDENTIALS...",
    "INITIALIZING CORE SYSTEMS...",
    "LOADING 3D ASSETS & SHADERS...",
    "CALIBRATING NEURAL INTERFACE...",
    "DECRYPTING PORTFOLIO DATA...",
    "SYNCING PROJECT REPOSITORIES...",
    "OPTIMIZING RENDER ENGINE...",
    "SYSTEM READY. ACCESS GRANTED."
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < messages.length) {
        setLogs(prev => [...prev, messages[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 font-mono"
    >
      <div className="w-full max-w-md space-y-2">
        <AnimatePresence>
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xs tracking-widest ${(log || "").includes("READY") ? "text-white font-bold" : "text-white/40"}`}
            >
              <span className="mr-2 text-white/20">[{new Date().toLocaleTimeString()}]</span>
              {log}
            </motion.div>
          ))}
        </AnimatePresence>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "linear" }}
          className="h-0.5 bg-white/30 mt-8 relative"
        >
          <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
