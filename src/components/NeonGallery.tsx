import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import productHeadset from '@/assets/product-headset.jpg';
import productKeyboard from '@/assets/product-keyboard.jpg';
import productMouse from '@/assets/product-mouse.jpg';

const products = [
  {
    id: 1,
    title: 'Neon Gaming Headset',
    price: '$299.99',
    image: productHeadset,
  },
  {
    id: 2,
    title: 'RGB Mechanical Keyboard',
    price: '$199.99',
    image: productKeyboard,
  },
  {
    id: 3,
    title: 'Wireless Gaming Mouse',
    price: '$149.99',
    image: productMouse,
  },
];

export function NeonGallery() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Staggered fade-in animation
    products.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-purple bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
          NEON GALLERY
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover cutting-edge gaming gear with stunning neon aesthetics and premium performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            {...product}
            className={`
              transition-all duration-500
              ${visibleCards.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
              }
            `}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neon-pink neon-glow-pink"></div>
            <span>Scale + Glow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neon-cyan neon-glow-cyan"></div>
            <span>Gradient Overlay</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neon-purple neon-glow-purple"></div>
            <span>Pulse Effect</span>
          </div>
        </div>
      </div>
    </section>
  );
}