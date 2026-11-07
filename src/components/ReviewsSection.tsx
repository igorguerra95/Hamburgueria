import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Utensils } from 'lucide-react';
import { REVIEWS } from '../data/menuData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-[#EA580C]/30 text-[#EA580C] text-xs font-bold uppercase tracking-wider">
            Experiência Real
          </span>
          <h2 className="font-display font-bold uppercase text-3xl sm:text-5xl text-white tracking-tight">
            QUEM PROVOU, <span className="text-[#EA580C]">VIROU DEVORADOR</span>
          </h2>
          <p className="text-sm text-slate-300">
            Confira a opinião de apaixonados por carne nobre, churrasqueiros e clientes frequentes da nossa brasa.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-[#EA580C]/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative"
            >
              <div className="space-y-4">
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#EA580C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EA580C]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                <div>
                  <h4 className="font-display font-bold text-base text-white uppercase tracking-wide">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans">
                    {rev.role} • <span className="text-slate-500">{rev.date}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[#EA580C] bg-[#EA580C]/10 px-2.5 py-1 rounded-md border border-[#EA580C]/20 w-fit">
                  <Utensils className="w-3 h-3" />
                  <span>Corte favorito: <strong>{rev.favoriteBurger}</strong></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
