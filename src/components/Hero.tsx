import React from 'react';
import { motion } from 'motion/react';
import { Flame, ArrowRight, ShieldCheck, Sparkles, Award, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onContactClick }) => {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-[#0F172A] z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#EA580C]/20 via-[#EA580C]/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      {/* Decorative fire sparks background texture */}
      <div 
        className="absolute inset-0 opacity-15 mix-blend-screen bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=70')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Magnetic Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#EA580C]/40 text-[#EA580C] text-xs font-semibold tracking-wide uppercase shadow-lg shadow-orange-950/40"
            >
              <Flame className="w-3.5 h-3.5 fill-[#EA580C]" />
              <span>Grelhados na Brasa de Lenha Nobre</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              <span className="text-slate-300 normal-case font-normal">Blends Angus 100% Frescos</span>
            </motion.div>

            {/* Display Headline with Clamp 48-96px */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
              className="font-display font-bold uppercase tracking-tight text-white text-5xl sm:text-6xl md:text-7xl xl:text-[84px] leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              ONDE O <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] via-orange-400 to-amber-300">FOGO</span> ENCONTRA A CARNE NO SEU ESTADO MAIS <span className="underline decoration-[#EA580C]/60 underline-offset-8">NOBRE</span>.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              Hambúrgueres artesanais forjados sob o calor implacável da brasa viva. Blends nobres moídos diariamente, queijos fundidos com perfeição e pães de fermentação natural selados na manteiga de garrafa.
            </motion.p>

            {/* Micro Details / Quality Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span className="text-xs text-slate-300 font-medium">100% Angus Certificado</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Crosta Maillard na Brasa</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Zero Conservantes</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={onContactClick}
                className="px-8 py-4 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-base shadow-xl shadow-orange-950/60 hover:shadow-orange-700/50 flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer group"
              >
                <span>{BUSINESS_INFO.ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMenu}
                className="px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-white/10 hover:border-[#EA580C]/50 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <span>Explorar Cardápio Digital</span>
              </button>
            </motion.div>

            {/* Quick Assurance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex items-center gap-4 text-xs text-slate-400 pt-2"
            >
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Preparo rápido sob encomenda</span>
              </div>
              <span className="text-slate-600">•</span>
              <span>Entrega expressa ou retirada</span>
            </motion.div>
          </div>

          {/* Right Column: Visual Hero Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Backlight Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#EA580C]/40 via-amber-500/20 to-transparent rounded-3xl blur-2xl opacity-70" />

              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900/80 shadow-2xl backdrop-blur-sm">
                <div className="relative h-80 sm:h-96 md:h-[430px] w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85"
                    alt="Hambúrguer artesanal O Predador Alfa grelhado na brasa"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-md bg-[#0F172A]/85 backdrop-blur-md border border-[#EA580C]/40 text-[#EA580C] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Flame className="w-3.5 h-3.5 fill-[#EA580C]" />
                    <span>Destaque da Brasa</span>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-semibold">
                    100% Angus
                  </div>
                </div>

                {/* Card Bottom Meta */}
                <div className="p-5 bg-[#0F172A]/95 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
                        O Predador Alfa
                      </h3>
                      <p className="text-xs text-slate-400">
                        2x Blends Angus 160g • Cheddar duplo • Bacon no mel de laranjeira
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase text-slate-400 block font-medium">Preço</span>
                      <span className="font-display text-2xl font-bold text-[#EA580C]">
                        R$ 46,90
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={onContactClick}
                    className="w-full py-2.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Pedir este corte agora</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Floating Floating Stat Badge Bottom Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-xl bg-slate-900/90 border border-[#EA580C]/30 shadow-2xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EA580C]/20 border border-[#EA580C]/40 flex items-center justify-center text-[#EA580C] font-display font-bold text-lg">
                  ★
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg leading-tight">4.9 / 5.0</div>
                  <div className="text-[11px] text-slate-400">+3.400 clientes vorazes</div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
