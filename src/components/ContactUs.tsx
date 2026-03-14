import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative min-h-screen w-full bg-black py-32 overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Earth Night"
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-thin text-white tracking-widest mb-8"
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-3xl font-light text-white/80 tracking-widest mb-12"
        >
          {t('contact.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center space-y-4 mb-16 text-white/60 font-light tracking-wider"
        >
          <p>{t('contact.address')}</p>
          <p>{t('contact.email')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button className="px-12 py-6 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-white text-lg font-light tracking-widest hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] transition-all duration-500 hover:scale-105">
            {t('contact.button')}
          </button>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-8 border-t border-white/10 bg-black/50 backdrop-blur-md text-center">
        <p className="text-white/40 text-sm font-light tracking-wider">
          © 2025 AethraVolt. All rights reserved.
        </p>
      </div>
    </section>
  );
}
