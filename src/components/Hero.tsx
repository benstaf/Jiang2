import React from 'react';
import { TrendingUp, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Solving Financial Markets
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Jiang Street is a research-driven Quantitative Trading Organization (QTO) that uses cutting-edge reinforcement learning to automatically trade across tokenized financial markets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://t.me/jiangstreet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >Invest  &nbsp;
              
              <TrendingUp className="mr-2" size={20} />       
            </a>
 
            <a
              href="https://forms.gle/zeva2efiZ2oSj6SG7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >Apply  &nbsp;
              
              <FileText className="mr-2" size={20} />
              
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4 font-medium">
              Think of Jiang Street as a research lab with trading bots attached to it
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}