import React from 'react';
import { Flame } from 'lucide-react';

interface NavProps {
  onLogoClick: () => void;
}

export default function Nav({ onLogoClick }: NavProps) {
  return (
    <nav className="bg-luxury-slate shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <button
              onClick={onLogoClick}
              className="flex-shrink-0 flex items-center space-x-3 hover:opacity-90 transition-opacity"
            >
              <Flame className="h-8 w-8 text-luxury-gold" />
              <span className="text-xl font-display tracking-luxury text-luxury-gold">Mr Fire</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}