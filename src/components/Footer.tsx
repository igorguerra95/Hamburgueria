import React from 'react';
import { Flame, Heart, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

interface FooterProps {
  onNavigateTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white shadow-lg">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                PREDADOR <span className="text-[#EA580C]">DA BRASA</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Laboratório artesanal de hambúrgueres grelhados no calor implacável da brasa de lenha nobre. Blends 100% Angus, queijos de pequenos produtores e sabor voraz.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              © {new Date().getFullYear()} Predador da Brasa. Todos os direitos reservados.
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-base uppercase text-white tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigateTo('inicio')}
                  className="hover:text-[#EA580C] transition-colors cursor-pointer text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('cardapio')}
                  className="hover:text-[#EA580C] transition-colors cursor-pointer text-left"
                >
                  Cardápio Digital Oficial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('sobre')}
                  className="hover:text-[#EA580C] transition-colors cursor-pointer text-left"
                >
                  O Ritual da Brasa & Lenha
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('metricas')}
                  className="hover:text-[#EA580C] transition-colors cursor-pointer text-left"
                >
                  Nossos Números
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('contato')}
                  className="hover:text-[#EA580C] transition-colors cursor-pointer text-left"
                >
                  Entrar em Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Business Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-base uppercase text-white tracking-wider">
              Atendimento & Endereço
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Horário: {BUSINESS_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigateTo('contato')}
                className="px-4 py-2 rounded-lg bg-slate-900 border border-[#EA580C]/40 text-[#EA580C] text-xs font-bold uppercase tracking-wider hover:bg-[#EA580C] hover:text-white transition-all cursor-pointer"
              >
                Solicitar Pedido no WhatsApp
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>Desenvolvido com paixão pelo fogo e pela boa gastronomia</span>
            <Flame className="w-3.5 h-3.5 text-[#EA580C] fill-[#EA580C]" />
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
