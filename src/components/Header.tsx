import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/logojiangstreet.jpg" 
              alt="Jiang Street" 
              className="h-8 w-auto"
            />
            <span className="ml-3 text-xl font-semibold text-gray-900">Jiang Street</span>
          </div>
          {/* <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Trading</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Technology</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Research</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Careers</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About</a>
          </nav> */}
          
        </div>
      </div>


    </header>
  );
}
