import { motion, AnimatePresence } from 'framer-motion'


interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-[#0a0a0c] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
        >
          {/* Architectural Grid Animation */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="loadingGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <motion.path 
                    d="M 40 0 L 0 0 0 40" 
                    fill="none" 
                    stroke="#5797D5" 
                    strokeWidth="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#loadingGrid)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <span className="font-heading font-bold text-3xl tracking-[0.3em] text-[#F5F6F7] mb-3">
                SURESH KUMAR
              </span>
              <span className="font-mono text-[10px] text-[#5797D5] tracking-[0.4em] mb-12">
                CAD DESIGNER
              </span>
            </motion.div>
            
            <div className="flex flex-col items-center gap-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-mono text-[9px] text-[#A8ADB5] tracking-[0.2em] uppercase"
              >
                Initializing Environment
              </motion.div>
              
              <div className="w-64 h-[1px] bg-[#181B20] relative overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], repeat: Infinity }}
                  className="absolute top-0 left-0 w-1/3 h-full bg-[#5797D5]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
