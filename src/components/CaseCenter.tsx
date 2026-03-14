import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const cases = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2065&auto=format&fit=crop",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop",
  }
];

export default function CaseCenter() {
  const { t } = useTranslation();

  return (
    <section id="cases" className="relative min-h-screen w-full bg-[#0a0a0a] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-thin text-white tracking-widest mb-20 text-center"
        >
          {t('cases.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={`Case ${item.id}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-light text-white tracking-wider mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  {t(`case.${item.id}.title`)}
                </h3>
                <div className="overflow-hidden">
                  <p className="text-white/70 font-light leading-relaxed tracking-wide transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {t(`case.${item.id}.desc`)}
                  </p>
                </div>
              </div>
              
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-[#00E5FF]/30 rounded-2xl transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
