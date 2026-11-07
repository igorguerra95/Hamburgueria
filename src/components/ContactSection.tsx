import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Send, MessageSquare, Check, Sparkles, Flame, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Fazer Pedido Imediato');
  const [peopleCount, setPeopleCount] = useState('1 a 2 pessoas');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const fullText = 
      `*Novo Contato via Site - Predador da Brasa*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *Telefone/WhatsApp:* ${phone}\n` +
      `🎯 *Interesse:* ${serviceType}\n` +
      `👥 *Porte:* ${peopleCount}\n` +
      (message ? `📝 *Mensagem:* ${message}\n` : '') +
      `\nSolicito atendimento com o mestre da brasa!`;

    const encoded = encodeURIComponent(fullText);
    const whatsappUrl = `https://wa.me/55${BUSINESS_INFO.whatsappRaw}?text=${encoded}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
    }, 600);
  };

  return (
    <section id="contato" className="py-24 relative bg-[#0F172A] border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EA580C]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#EA580C]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#EA580C]/30 text-[#EA580C] text-xs font-bold uppercase tracking-wider"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Atendimento Personalizado</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight"
          >
            FALE DIRETO COM A <span className="text-[#EA580C]">NOSSA EQUIPE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
          >
            Faça seu pedido personalizado, reserve sua mesa ou solicite o Predador da Brasa para o seu evento corporativo e comemorações.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards & Intelligent Features */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Contact Cards */}
            <div className="p-8 rounded-2xl bg-slate-900/90 border border-white/10 space-y-6 shadow-xl">
              <h3 className="font-display font-bold text-2xl uppercase text-white tracking-tight flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#EA580C]" />
                <span>Dados de Atendimento</span>
              </h3>

              <div className="space-y-5">
                {/* Telefone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#EA580C]/20 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Telefone & WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/55${BUSINESS_INFO.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-[#EA580C] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-[11px] text-emerald-400 mt-0.5">Disponível para pedidos imediatos</p>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#EA580C]/20 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Endereço
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Retirada no balcão ou entrega expressa</p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#EA580C]/20 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Horário de Funcionamento
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_INFO.hours}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Consulte horários para feriados e fins de semana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Features Highlight Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#EA580C]/10 border border-white/10 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                <h4 className="text-xs uppercase tracking-widest text-[#EA580C] font-bold">
                  Diferenciais de Excelência
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  'Cardápio Digital Interativo',
                  'SEO Avançado Otimizado',
                  'Micro-interações Premium',
                  'Performance Extrema',
                  'Copywriting Magnético',
                  'Design Responsivo Fluido'
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/50 border border-white/5 text-[11px] text-slate-300">
                    <Check className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-Conversion Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl">
              <div className="space-y-2 mb-8">
                <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white tracking-tight">
                  Envie uma Mensagem Rápida
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Preencha os campos abaixo para iniciar seu atendimento prioritário via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-slate-300 font-bold block">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Gabriel Silveira"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-slate-300 font-bold block">
                    Telefone / WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (11) 98765-4321"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>

                {/* Service Type & People Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-slate-300 font-bold block">
                      Tipo de Atendimento
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white focus:outline-none focus:border-[#EA580C] transition-colors cursor-pointer"
                    >
                      <option value="Fazer Pedido Imediato">Fazer Pedido Imediato</option>
                      <option value="Reserva de Mesa">Reserva de Mesa</option>
                      <option value="Evento Corporativo ou Festa">Evento Corporativo ou Festa</option>
                      <option value="Dúvidas sobre o Cardápio">Dúvidas sobre o Cardápio</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-slate-300 font-bold block">
                      Estimativa de Pessoas
                    </label>
                    <select
                      value={peopleCount}
                      onChange={(e) => setPeopleCount(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-white/10 text-sm text-white focus:outline-none focus:border-[#EA580C] transition-colors cursor-pointer"
                    >
                      <option value="1 a 2 pessoas">1 a 2 pessoas</option>
                      <option value="3 a 5 pessoas">3 a 5 pessoas</option>
                      <option value="6 a 12 pessoas">6 a 12 pessoas</option>
                      <option value="Mais de 15 pessoas (Evento)">Mais de 15 pessoas (Evento)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-slate-300 font-bold flex items-center justify-between">
                    <span>Mensagem ou Pedido Especial (Opcional)</span>
                    <span className="text-[10px] text-slate-500 normal-case font-normal">Máx. 500 caracteres</span>
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva seu pedido, data desejada para reserva ou qualquer restrição alimentar..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#EA580C] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-orange-950/60 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75"
                >
                  {submitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Encaminhando para o WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{BUSINESS_INFO.ctaText}</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 pt-1">
                  🔒 Seus dados são protegidos e usados exclusivamente para contato direto pela equipe da hamburgueria.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
