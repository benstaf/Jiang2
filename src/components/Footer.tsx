import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/public/Screenshot_2025-07-21-13-10-38-332_com.google.android.apps.docs.editors.slides-edit.jpg" 
                alt="Jiang Street" 
                className="h-8 w-auto"
              />
              <span className="ml-3 text-xl font-semibold">Jiang Street</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A research-driven Quantitative Trading Organization (QTO) solving decentralized markets through advanced technology and innovative research.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>Global </span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>contact@jiangstreet.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Jiang Street. All rights reserved. | Research-driven Quantitative Trading Organization</p>
        </div>
      </div>
    </footer>
  );
}