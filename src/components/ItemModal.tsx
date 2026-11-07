import React, { useState } from 'react';
import { X, Flame, Plus, Minus, Check, MessageSquare } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, doneness?: string, notes?: string) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [doneness, setDoneness] = useState('Ao Ponto (Rosado e Suculento)');
  const [notes, setNotes] = useState('');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const donenessOptions = [
    'Mal Passado (Selado na brasa, centro vermelho)',
    'Ao Ponto (Rosado e Suculento - Recomendado)',
    'Ao Ponto para Bem (Quase sem rosa)',
    'Bem Passado (Totalmente assado)',
  ];

  const isMeatItem = item.category === 'prime' || item.category === 'smash' || item.category === 'autorais';

  const handleConfirm = () => {
    onAddToCart(item, quantity, isMeatItem ? doneness : undefined, notes.trim());
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F172A] border border-white/15 shadow-2xl text-slate-100 flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 border border-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden bg-slate-950">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/40" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              {item.badge && (
                <span className="px-2.5 py-1 rounded-md bg-[#EA580C] text-white text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                  {item.badge}
                </span>
              )}
              <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight">
                {item.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#EA580C]">
                R$ {(item.price * quantity).toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-amber-500">{item.tagline}</p>
            <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
          </div>

          {/* Ingredientes Completos */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Ingredientes da Receita
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-slate-800 text-xs text-slate-200 border border-white/5"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Ponto da Carne (se aplicável) */}
          {isMeatItem && (
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#EA580C]" />
                <h4 className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                  Escolha o Ponto da Brasa
                </h4>
              </div>
              <div className="space-y-2">
                {donenessOptions.map((opt) => (
                  <label
                    key={opt}
                    onClick={() => setDoneness(opt)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                      doneness === opt
                        ? 'bg-[#EA580C]/15 border-[#EA580C] text-white font-semibold'
                        : 'bg-slate-900/80 border-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <span>{opt}</span>
                    <input
                      type="radio"
                      name="doneness"
                      checked={doneness === opt}
                      onChange={() => setDoneness(opt)}
                      className="accent-[#EA580C]"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Observações */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Observações (ex: sem cebola, maionese à parte)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Alguma instrução especial para a cozinha?"
              rows={2}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#EA580C]"
            />
          </div>

          {/* Bottom Actions: Quantity and Add */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3 p-1 rounded-xl bg-slate-900 border border-white/10">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-display font-bold text-lg px-2 text-white">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleConfirm}
              className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer ${
                addedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-orange-950/60'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Item Adicionado à Comanda!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Adicionar à Comanda (R$ {(item.price * quantity).toFixed(2).replace('.', ',')})</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
