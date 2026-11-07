import React from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, Flame, Phone } from 'lucide-react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (index: number, newQuantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onContactClick: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onContactClick,
}) => {
  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSendToWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `*Olá, Predador da Brasa! Gostaria de fazer um pedido:*\n\n`;
    
    cart.forEach((cartItem, idx) => {
      message += `${idx + 1}. *${cartItem.item.name}* (x${cartItem.quantity}) - R$ ${(cartItem.item.price * cartItem.quantity).toFixed(2).replace('.', ',')}\n`;
      if (cartItem.meatDoneness) {
        message += `   ↳ Ponto: ${cartItem.meatDoneness}\n`;
      }
      if (cartItem.notes) {
        message += `   ↳ Obs: ${cartItem.notes}\n`;
      }
    });

    message += `\n*Total do Pedido: R$ ${totalAmount.toFixed(2).replace('.', ',')}*`;
    message += `\n\nPor favor, informe o tempo estimado e os dados para pagamento.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/55${BUSINESS_INFO.whatsappRaw}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md h-full bg-[#0F172A] border-l border-white/10 shadow-2xl flex flex-col text-slate-100">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EA580C]/20 border border-[#EA580C]/40 flex items-center justify-center text-[#EA580C]">
              <Flame className="w-5 h-5 fill-[#EA580C]" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg uppercase tracking-tight text-white">
                Comanda Digital da Brasa
              </h3>
              <p className="text-xs text-slate-400">
                {totalItems} {totalItems === 1 ? 'item selecionado' : 'itens selecionados'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-slate-400">
              <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-white/5 flex items-center justify-center text-slate-500">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-lg uppercase text-slate-200">
                  Sua comanda está vazia
                </h4>
                <p className="text-xs text-slate-400 max-w-xs">
                  Nenhum corte adicionado ainda. Escolha seus hambúrgueres artesanais no cardápio!
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Ver Cardápio
              </button>
            </div>
          ) : (
            cart.map((cartItem, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/90 border border-white/5 space-y-3 relative group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h5 className="font-display font-bold text-base uppercase text-white tracking-tight">
                      {cartItem.item.name}
                    </h5>
                    <span className="text-xs text-[#EA580C] font-semibold">
                      R$ {(cartItem.item.price * cartItem.quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveItem(idx)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
                    title="Remover item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {cartItem.meatDoneness && (
                  <div className="text-[11px] text-amber-400/90 bg-amber-950/30 px-2 py-0.5 rounded border border-amber-900/30">
                    Ponto: {cartItem.meatDoneness}
                  </div>
                )}

                {cartItem.notes && (
                  <p className="text-[11px] text-slate-400 italic">
                    Obs: "{cartItem.notes}"
                  </p>
                )}

                {/* Quantity Controls */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-[11px] text-slate-400">Quantidade:</span>
                  <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1">
                    <button
                      onClick={() => onUpdateQuantity(idx, cartItem.quantity - 1)}
                      className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-700"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-white px-2">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(idx, cartItem.quantity + 1)}
                      className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-700"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Subtotal & Action */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-slate-900/80 space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Subtotal dos cortes:</span>
                <span>R$ {totalAmount.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Taxa de entrega / preparo:</span>
                <span className="text-emerald-400 font-medium">A combinar</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="font-display text-base uppercase text-white font-bold">
                  Total Estimado:
                </span>
                <span className="font-display text-2xl font-bold text-[#EA580C]">
                  R$ {totalAmount.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-950/60 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{BUSINESS_INFO.ctaText} via WhatsApp</span>
              </button>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={onClearCart}
                  className="text-[11px] text-slate-400 hover:text-red-400 underline transition-colors cursor-pointer"
                >
                  Limpar comanda
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="text-[11px] text-[#EA580C] hover:underline transition-colors cursor-pointer"
                >
                  Prefere formulário no site?
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
