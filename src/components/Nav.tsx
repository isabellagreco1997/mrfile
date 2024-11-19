import React from 'react';
import { Landmark } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <Landmark className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">WealthPathway</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}