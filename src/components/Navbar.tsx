import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { cn } from '../utils';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const languages = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'th', label: 'ไทย' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <AnimatePresence mode="wait">
            {!scrolled ? (
              <motion.div
                key="short"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="text-3xl font-thin text-white tracking-widest"
              >
                AE
              </motion.div>
            ) : (
              <motion.div
                key="full"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '200px' }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden relative h-8"
              >
                <motion.div
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute inset-0 flex items-baseline gap-2 whitespace-nowrap"
                >
                  <span className="text-2xl font-light text-white">
                    Aethra<span className="text-[#00E5FF] font-medium">V</span>olt
                  </span>
                  <span className="text-sm font-thin text-white/70 tracking-widest">合擎源动</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['home', 'products', 'cases', 'about', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-white/80 hover:text-[#00E5FF] transition-colors text-sm font-light tracking-wider"
            >
              {t(`nav.${item}`)}
            </a>
          ))}
          
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-white/80 hover:text-[#00E5FF] transition-colors"
            >
              <Globe className="w-4 h-4" />
            </button>
            
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-4 w-32 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm transition-colors",
                        i18n.language === lang.code ? "text-[#00E5FF] bg-white/5" : "text-white/70 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
