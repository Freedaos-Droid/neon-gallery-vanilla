import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  image: string;
  className?: string;
}

export function ProductCard({ id, title, price, image, className }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const getCardEffect = (cardId: number) => {
    switch (cardId) {
      case 1:
        return 'hover:scale-105 hover:neon-glow-pink hover:neon-border-pink';
      case 2:
        return 'hover:neon-glow-cyan hover:neon-border-cyan relative overflow-hidden group';
      case 3:
        return 'hover:animate-neon-pulse hover:neon-border-purple';
      default:
        return 'hover:scale-105';
    }
  };

  const getGradientOverlay = (cardId: number) => {
    if (cardId === 2) {
      return (
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      );
    }
    return null;
  };

  const getIconEffect = (cardId: number) => {
    if (cardId === 2) {
      return 'group-hover:-translate-y-1 transition-transform duration-300';
    }
    return '';
  };

  return (
    <div
      className={`
        bg-card rounded-lg p-6 border border-border
        transition-all duration-300 cursor-pointer
        ${getCardEffect(id)}
        ${className}
      `}
    >
      {getGradientOverlay(id)}
      
      <div className="relative z-10">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          
          <div className="flex items-center justify-between">
            <span className={`text-2xl font-bold ${
              id === 1 ? 'neon-text-pink' : 
              id === 2 ? 'neon-text-cyan' : 
              'neon-text-purple'
            }`}>
              {price}
            </span>
            
            <div className={`flex gap-3 ${getIconEffect(id)}`}>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isLiked 
                    ? 'bg-neon-pink text-white neon-glow-pink' 
                    : 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              
              <button className={`p-2 rounded-full transition-all duration-200 ${
                id === 1 ? 'bg-neon-pink/20 hover:bg-neon-pink hover:neon-glow-pink text-neon-pink hover:text-white' :
                id === 2 ? 'bg-neon-cyan/20 hover:bg-neon-cyan hover:neon-glow-cyan text-neon-cyan hover:text-white' :
                'bg-neon-purple/20 hover:bg-neon-purple hover:neon-glow-purple text-neon-purple hover:text-white'
              }`}>
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}