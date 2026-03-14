import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "China", label: "中国", coordinates: [104.1954, 35.8617], dx: 10, dy: 3, anchor: "start" },
  { name: "USA", label: "美国", coordinates: [-95.7129, 37.0902], dx: 10, dy: 3, anchor: "start" },
  { name: "Germany", label: "德国", coordinates: [10.4515, 51.1657], dx: -10, dy: 3, anchor: "end" },
  { name: "Vietnam", label: "越南", coordinates: [108.2772, 14.0583], dx: 10, dy: 3, anchor: "start" },
  { name: "Thailand", label: "泰国", coordinates: [100.9925, 15.8700], dx: -10, dy: 3, anchor: "end" },
  { name: "Australia", label: "澳大利亚", coordinates: [133.7751, -25.2744], dx: 10, dy: 3, anchor: "start" }
];

function AnimatedCounter({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className="group-hover:text-[#00E5FF] transition-colors duration-500">
      {count}{suffix}
    </span>
  );
}

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative min-h-screen w-full bg-black py-32 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-thin text-white tracking-widest mb-24 text-center"
        >
          {t('about.title')}
        </motion.h2>

        {/* Data Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group cursor-default relative"
          >
            <div className="absolute inset-0 bg-[#0066FF]/0 group-hover:bg-[#0066FF]/10 blur-3xl rounded-full transition-all duration-500" />
            <h3 className="relative text-6xl md:text-8xl font-thin text-white tracking-tighter mb-4 group-hover:drop-shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all duration-500">
              <AnimatedCounter from={0} to={1} suffix="GW+" />
            </h3>
            <p className="relative text-white/50 font-light tracking-widest text-sm uppercase group-hover:text-white/80 transition-colors duration-500">累计运营可再生能源资产</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group cursor-default relative"
          >
            <div className="absolute inset-0 bg-[#0066FF]/0 group-hover:bg-[#0066FF]/10 blur-3xl rounded-full transition-all duration-500" />
            <h3 className="relative text-6xl md:text-8xl font-thin text-white tracking-tighter mb-4 group-hover:drop-shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all duration-500">
              <AnimatedCounter from={0} to={5} suffix="亿度" />
            </h3>
            <p className="relative text-white/50 font-light tracking-widest text-sm uppercase group-hover:text-white/80 transition-colors duration-500">累计节约电能</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group cursor-default relative"
          >
            <div className="absolute inset-0 bg-[#0066FF]/0 group-hover:bg-[#0066FF]/10 blur-3xl rounded-full transition-all duration-500" />
            <h3 className="relative text-6xl md:text-8xl font-thin text-white tracking-tighter mb-4 group-hover:drop-shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all duration-500">
              <AnimatedCounter from={0} to={30} suffix="万吨" />
            </h3>
            <p className="relative text-white/50 font-light tracking-widest text-sm uppercase group-hover:text-white/80 transition-colors duration-500">累计减少碳排放</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xl md:text-2xl font-light text-white/80 tracking-widest mb-32 max-w-4xl mx-auto leading-relaxed"
        >
          {t('about.data.desc')}
        </motion.p>

        {/* Grid Layout for Core Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {['vision', 'position', 'focus', 'value'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 group"
            >
              <h4 className="text-2xl font-light text-white tracking-wider mb-6 group-hover:text-[#00E5FF] transition-colors">
                {t(`about.${item}`)}
              </h4>
              <p className="text-white/60 font-light leading-relaxed tracking-wide">
                {t(`about.${item}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Global Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-md"
        >
          <ComposableMap projectionConfig={{ scale: 140 }} className="w-full h-full">
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1a1a1a"
                    stroke="#333333"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#222", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {markers.map(({ name, label, coordinates, dx, dy, anchor }) => (
              <Marker key={name} coordinates={coordinates as [number, number]}>
                <motion.g
                  initial="rest"
                  whileHover="hover"
                  className="cursor-pointer"
                >
                  <motion.circle 
                    r={4} 
                    className="animate-ping opacity-75" 
                    variants={{
                      rest: { fill: "#00E5FF" },
                      hover: { fill: "#0066FF" }
                    }}
                  />
                  <motion.circle 
                    r={2} 
                    variants={{
                      rest: { fill: "#00E5FF", scale: 1 },
                      hover: { fill: "#0066FF", scale: 2 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.text
                    textAnchor={anchor as "start" | "middle" | "end"}
                    x={dx}
                    y={dy}
                    className="text-[10px] font-light tracking-widest"
                    variants={{
                      rest: { fill: "rgba(255, 255, 255, 0.9)" },
                      hover: { fill: "#00E5FF" }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {label}
                  </motion.text>
                </motion.g>
              </Marker>
            ))}
          </ComposableMap>
        </motion.div>
      </div>
    </section>
  );
}
