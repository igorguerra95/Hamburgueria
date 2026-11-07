import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Flame, Plus, Eye, Sparkles, Check, Info } from 'lucide-react';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/menuData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onAddToCart: (item: MenuItem) => void;
  onContactClick: () => void;
}

type CategoryFilter = 'all' | 'prime' | 'smash' | 'autorais' | 'porcoes' | 'bebidas';

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  onAddToCart,
  onContactClick
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Cortes' },
    { id: 'prime', label: 'Linha Brasa Prime' },
    { id: 'smash', label: 'Linha Smash Flame' },
    { id: 'autorais', label: 'Criações Autorais' },
    { id: 'porcoes', label: 'Porções & Entradas' },
    { id: 'bebidas', label: 'Chopp & Bebidas' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onAddToCart(item);
    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  return (
    <section id="cardapio" className="py-24 relative bg-[#0F172A] border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#EA580C]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#EA580C]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#EA580C]/30 text-[#EA580C] text-xs font-bold uppercase tracking-wider"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Cardápio Digital Oficial</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight"
          >
            CORTES FORJADOS NO <span className="text-[#EA580C]">FOGO E NA BRASA</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Selecione seus itens favoritos, personalize o ponto da carne e monte sua comanda digital para enviar diretamente pelo WhatsApp.
          </motion.p>
        </div>

        {/* Category Pills Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none"
        >
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#EA580C] text-white shadow-lg shadow-orange-950/50'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Menu Cards 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const isAdded = recentlyAddedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectItem(item)}
                className="group relative rounded-2xl bg-slate-900/90 border border-white/10 hover:border-[#EA580C]/40 transition-all duration-300 shadow-xl overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {item.badge && (
                      <span className="px-3 py-1 rounded-md bg-[#EA580C] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                        {item.badge}
                      </span>
                    )}
                    {item.weight && (
                      <span className="px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-slate-300 text-[10px] font-medium border border-white/10">
                        {item.weight}
                      </span>
                    )}
                  </div>

                  {/* Quick Detail View Action */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectItem(item);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/70 backdrop-blur-sm text-slate-300 hover:text-white border border-white/10 hover:border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    title="Ver detalhes"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-2xl font-bold uppercase text-white tracking-tight group-hover:text-[#EA580C] transition-colors">
                        {item.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="font-display text-xl font-bold text-[#EA580C]">
                          R$ {item.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-amber-500 font-medium">
                      {item.tagline}
                    </p>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Ingredients Tags */}
                  <div className="space-y-3 pt-2 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {item.ingredients.slice(0, 3).map((ing, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-white/5"
                        >
                          {ing}
                        </span>
                      ))}
                      {item.ingredients.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/50 text-slate-400">
                          +{item.ingredients.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectItem(item);
                        }}
                        className="py-2.5 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-xs font-medium text-slate-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5 text-slate-400" />
                        <span>Detalhes</span>
                      </button>

                      <button
                        onClick={(e) => handleQuickAdd(e, item)}
                        className={`py-2.5 px-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-md'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Adicionado</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Adicionar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Menu Banner / Custom Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#EA580C]/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-bold text-2xl uppercase text-white">
              DESEJA UM BLEND OU CORTE PERSONALIZADO?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Atendemos pedidos especiais para eventos, hambúrgueres duplos sob medida e harmonizações com chopp artesanal.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="px-6 py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-orange-950/60 shrink-0 transition-all cursor-pointer"
          >
            {BUSINESS_INFO.ctaText}
          </button>
        </motion.div>

      </div>
    </section>
  );
};
