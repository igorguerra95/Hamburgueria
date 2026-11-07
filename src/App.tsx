import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ItemModal } from './components/ItemModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Smooth scroll to sections
  const handleNavigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add item with optional doneness and notes
  const handleAddToCart = (
    item: MenuItem,
    quantity: number = 1,
    doneness?: string,
    notes?: string
  ) => {
    setCart((prev) => {
      // Check if item with same ID and same doneness and notes exists
      const existingIdx = prev.findIndex(
        (ci) =>
          ci.item.id === item.id &&
          ci.meatDoneness === doneness &&
          ci.notes === (notes || '')
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      }

      return [
        ...prev,
        {
          item,
          quantity,
          meatDoneness: doneness,
          notes: notes || '',
        },
      ];
    });
  };

  const handleQuickAdd = (item: MenuItem) => {
    handleAddToCart(item, 1);
  };

  const handleUpdateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const next = [...prev];
      next[index].quantity = newQuantity;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex flex-col font-sans selection:bg-[#EA580C]/30 selection:text-white">
      {/* Fixed Header */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateTo={handleNavigateTo}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => handleNavigateTo('cardapio')}
          onContactClick={() => handleNavigateTo('contato')}
        />

        {/* Cardápio Digital Interativo */}
        <MenuSection
          onSelectItem={(item) => setSelectedItem(item)}
          onAddToCart={handleQuickAdd}
          onContactClick={() => handleNavigateTo('contato')}
        />

        {/* A Brasa & lenha - Filosofia */}
        <AboutSection />

        {/* Métricas e Estatísticas Animadas */}
        <StatsSection />

        {/* Avaliações dos Clientes */}
        <ReviewsSection />

        {/* Contato & Pedidos */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigateTo={handleNavigateTo} />

      {/* Item Customization Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Digital Order Slip / Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onContactClick={() => {
          setIsCartOpen(false);
          handleNavigateTo('contato');
        }}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
