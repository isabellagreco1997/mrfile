import React from 'react';
import { Flame } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="bg-luxury-slate shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <Flame className="h-8 w-8 text-luxury-gold" />
                <span className="text-xl font-display tracking-luxury text-luxury-gold">Mr Fire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}