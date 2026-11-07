import React from 'react';
import { motion } from 'motion/react';
import { Flame, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PILLARS } from '../data/menuData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative bg-slate-950 text-slate-100 overflow-hidden border-t border-white/10">
      {/* Decorative fire glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#EA580C]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-600/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#EA580C]/30 text-[#EA580C] text-xs font-bold uppercase tracking-wider"
            >
              <Flame className="w-3.5 h-3.5 fill-[#EA580C]" />
              <span>O Ritual da Parrilla & Fogo</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight"
            >
              NÃO É APENAS COMIDA. É A NOSSA <span className="text-[#EA580C]">OBSESSÃO PELO FOGO</span>.
            </motion.h2>
          </div>

          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed"
            >
              Nascemos para resgatar a intensidade ancestral do churrasco feito na brasa viva e levá-la ao universo do hambúrguer artesanal de alta precisão gastronômica.
            </motion.p>
          </div>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PILLARS.map((pillar, idx) => {
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-[#EA580C]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute -top-3 -right-2 font-display text-8xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#EA580C]/10 transition-colors">
                  {pillar.number}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#EA580C]/15 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] group-hover:scale-110 transition-transform">
                    {idx === 0 && <Flame className="w-6 h-6" />}
                    {idx === 1 && <Sparkles className="w-6 h-6" />}
                    {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                  </div>

                  <div>
                    <span className="text-xs font-bold text-[#EA580C] tracking-widest uppercase">
                      Pilar {pillar.number}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-amber-500 font-medium mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C]" />
                  <span>Padrão de excelência inegociável</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sensory Manifesto Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-slate-900 via-slate-900 to-[#0F172A] p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded bg-[#EA580C]/20 text-[#EA580C] text-xs font-bold uppercase tracking-wider">
                Manifesto da Brasa
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl uppercase text-white tracking-tight leading-tight">
                "QUEM EXPERIMENTA O FOGO DE VERDADE NUNCA MAIS ACEITA CARNE DE CHAPA INDUSTRIAL."
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Cada hambúrguer que sai da nossa grelha carrega a assinatura do carvão incandescente, a fumaça sutil das lenhas frutíferas e o respeito absoluto pelo tempo de cocção. Esse é o compromisso do Predador da Brasa.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#EA580C]/20 border border-[#EA580C]/40 flex items-center justify-center font-display font-bold text-xl text-[#EA580C]">
                  800°
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Temperatura da Brasa</h4>
                  <p className="text-xs text-slate-400">Selagem instantânea que retém todos os sucos</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-display font-bold text-xl text-amber-400">
                  10h
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Defumação Lenta</h4>
                  <p className="text-xs text-slate-400">Lenha de macieira que desmancha a carne</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
