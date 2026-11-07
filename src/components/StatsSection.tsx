import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data/menuData';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 1800; // 1.8s duration

    const update = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = value % 1 === 0 ? Math.floor(ease * value) : Number((ease * value).toFixed(1));
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">
      {value % 1 === 0 ? displayValue : displayValue.toFixed(1)}
      <span className="text-[#EA580C]">{suffix}</span>
    </span>
  );
}

export const StatsSection: React.FC = () => {
  return (
    <section id="metricas" className="py-20 relative bg-[#0F172A] border-t border-b border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#EA580C]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-[#EA580C]/30 text-[#EA580C] text-xs font-bold uppercase tracking-wider">
            Nossos Números
          </span>
          <h2 className="font-display font-bold uppercase text-3xl sm:text-4xl text-white">
            NÚMEROS QUE COMPROVAM A <span className="text-[#EA580C]">NOSSA QUALIDADE</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Cada métrica reflete o compromisso com a matéria-prima de verdade e o respeito aos clientes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-[#EA580C]/40 transition-all duration-300 text-center flex flex-col justify-center items-center shadow-lg group"
            >
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg uppercase text-slate-100 tracking-wide mt-1">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
