import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Using a placeholder video URL that represents wind turbines/energy */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full scale-105"
          poster="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-wind-turbines-at-sunset-2743/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay - Darker at top/bottom, lighter in middle, overall tech feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-thin text-white tracking-widest leading-tight mb-12"
        >
          {t('hero.slogan')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-white font-light tracking-wider hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300">
            {t('hero.explore')}
          </button>
          <button className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white font-light tracking-wider hover:bg-white/10 transition-all duration-300">
            {t('hero.learn')}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse" />
      </motion.div>
    </section>
  );
}
