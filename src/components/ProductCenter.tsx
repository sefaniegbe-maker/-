import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Activity } from 'lucide-react';
import { cn } from '../utils';

export default function ProductCenter() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="products" className="relative min-h-screen w-full bg-black py-32 overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          alt="Dashboard Background"
          className="object-cover w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-thin text-white tracking-widest mb-16"
          >
            {t('products.title')}
          </motion.h2>

          <div className="space-y-8">
            {/* Matrix */}
            <div className="border-b border-white/10 pb-8">
              <button
                onClick={() => toggleExpand('matrix')}
                className="flex items-center justify-between w-full text-left group"
              >
                <h3 className="text-2xl font-light text-white/90 tracking-wider group-hover:text-[#00E5FF] transition-colors">
                  {t('products.matrix')}
                </h3>
                <ChevronDown
                  className={cn(
                    "w-6 h-6 text-white/50 transition-transform duration-300",
                    expanded === 'matrix' && "rotate-180 text-[#00E5FF]"
                  )}
                />
              </button>
              <AnimatePresence>
                {expanded === 'matrix' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-6 text-white/60 font-light leading-relaxed tracking-wide">
                      {t('products.matrix.desc')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* System */}
            <div className="border-b border-white/10 pb-8">
              <button
                onClick={() => toggleExpand('system')}
                className="flex items-center justify-between w-full text-left group"
              >
                <h3 className="text-2xl font-light text-white/90 tracking-wider group-hover:text-[#00E5FF] transition-colors">
                  {t('products.system')}
                </h3>
                <ChevronDown
                  className={cn(
                    "w-6 h-6 text-white/50 transition-transform duration-300",
                    expanded === 'system' && "rotate-180 text-[#00E5FF]"
                  )}
                />
              </button>
              <AnimatePresence>
                {expanded === 'system' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-6 text-white/60 font-light leading-relaxed tracking-wide">
                      {t('products.system.desc')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Image - 3D Perspective */}
        <motion.div
          initial={{ opacity: 0, rotateY: -20, x: 50 }}
          whileInView={{ opacity: 1, rotateY: -10, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, type: "spring" }}
          style={{ perspective: 1000 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,102,255,0.2)] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 to-[#00E5FF]/10 mix-blend-overlay z-10" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="AethraGrid Dashboard"
              className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Blinking Anchor */}
            <div className="absolute top-[40%] left-[60%] z-20 group/anchor">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-[#00E5FF] animate-ping absolute inset-0" />
                <div className="w-4 h-4 rounded-full bg-[#00E5FF] relative flex items-center justify-center shadow-[0_0_15px_#00E5FF]">
                  <Activity className="w-2 h-2 text-black" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover/anchor:opacity-100 transition-all duration-300 translate-y-2 group-hover/anchor:translate-y-0 pointer-events-none">
                  <div className="bg-black/90 backdrop-blur-md border border-[#00E5FF]/30 px-4 py-3 rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.2)] whitespace-nowrap">
                    <p className="text-[#00E5FF] text-xs font-mono mb-1">{t('products.carbon')}</p>
                    <p className="text-white text-xl font-light tracking-wider">1,245.8 <span className="text-sm text-white/50">tCO₂</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
