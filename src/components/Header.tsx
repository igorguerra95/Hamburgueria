import React, { useState, useEffect } from 'react';
import { Flame, ShoppingBag, Menu, X, Phone, UtensilsCrossed, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onNavigateTo: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cart, onOpenCart, onNavigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavClick = (id: string) => {
    onNavigateTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white shadow-lg shadow-orange-950/40 group-hover:scale-105 transition-transform duration-200">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white flex items-center gap-1">
                PREDADOR <span className="text-[#EA580C]">DA BRASA</span>
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-slate-400 font-sans -mt-1 font-medium">
                Hamburgueria Artesanal
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('inicio')}
              className="text-sm font-medium text-slate-300 hover:text-[#EA580C] transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('cardapio')}
              className="text-sm font-medium text-slate-300 hover:text-[#EA580C] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#EA580C]" />
              Cardápio
            </button>
            <button
              onClick={() => handleNavClick('sobre')}
              className="text-sm font-medium text-slate-300 hover:text-[#EA580C] transition-colors cursor-pointer"
            >
              A Brasa
            </button>
            <button
              onClick={() => handleNavClick('metricas')}
              className="text-sm font-medium text-slate-300 hover:text-[#EA580C] transition-colors cursor-pointer"
            >
              Métricas
            </button>
            <button
              onClick={() => handleNavClick('contato')}
              className="text-sm font-medium text-slate-300 hover:text-[#EA580C] transition-colors cursor-pointer"
            >
              Contato
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Live Indicator Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Brasas Acesas</span>
            </div>

            {/* Cart / Comanda Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-slate-200 transition-all cursor-pointer focus:outline-none flex items-center gap-2"
              title="Ver comanda de pedido"
            >
              <ShoppingBag className="w-5 h-5 text-[#EA580C]" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#EA580C] text-white text-xs font-bold flex items-center justify-center shadow-md animate-scale">
                  {totalItems}
                </span>
              )}
              <span className="hidden sm:inline text-xs font-semibold text-slate-200">
                {totalItems > 0 ? `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}` : 'Comanda'}
              </span>
            </button>

            {/* CTA Button: Entrar em contato */}
            <button
              onClick={() => handleNavClick('contato')}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-bold shadow-lg shadow-orange-900/30 hover:shadow-orange-700/40 transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_INFO.ctaText}</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-5 rounded-xl bg-[#0F172A] border border-white/15 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Navegação</span>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Atendimento Online</span>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick('inicio')}
                className="text-left py-2 text-base font-medium text-slate-200 hover:text-[#EA580C] transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => handleNavClick('cardapio')}
                className="text-left py-2 text-base font-medium text-slate-200 hover:text-[#EA580C] transition-colors flex items-center justify-between"
              >
                <span>Cardápio Digital</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#EA580C]/20 text-[#EA580C] font-semibold">
                  6+ Cortes
                </span>
              </button>
              <button
                onClick={() => handleNavClick('sobre')}
                className="text-left py-2 text-base font-medium text-slate-200 hover:text-[#EA580C] transition-colors"
              >
                A Brasa & Lenha
              </button>
              <button
                onClick={() => handleNavClick('metricas')}
                className="text-left py-2 text-base font-medium text-slate-200 hover:text-[#EA580C] transition-colors"
              >
                Nossos Números
              </button>
              <button
                onClick={() => handleNavClick('contato')}
                className="text-left py-2 text-base font-medium text-slate-200 hover:text-[#EA580C] transition-colors"
              >
                Fazer Pedido & Contato
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNavClick('contato')}
                className="w-full py-3 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-orange-950/50"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS_INFO.ctaText}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
