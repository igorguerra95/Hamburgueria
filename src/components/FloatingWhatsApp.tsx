import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const defaultMessage = encodeURIComponent(
      'Olá, equipe do Predador da Brasa! Gostaria de consultar o cardápio e fazer um pedido.'
    );
    const url = `https://wa.me/55${BUSINESS_INFO.whatsappRaw}?text=${defaultMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:block px-3.5 py-2 rounded-xl bg-slate-900 border border-[#EA580C]/40 text-xs text-white font-medium shadow-2xl animate-in fade-in duration-150">
          🔥 Fale com o Mestre da Brasa agora!
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="whatsapp-pulse relative w-14 h-14 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white flex items-center justify-center shadow-2xl shadow-orange-950/80 transition-transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
        aria-label="Entrar em contato via WhatsApp"
        title="Entrar em contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white" />
        
        {/* Little online badge */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0F172A]" />
      </button>
    </div>
  );
};
