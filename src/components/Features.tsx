import React from 'react';
import { Brain, Code, BarChart3, Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Advanced reinforcement learning algorithms combined with large language models to identify market patterns and opportunities.'
  },
  {
    icon: Code,
    title: 'Technology',
    description: 'Cutting-edge infrastructure and proprietary trading systems built for speed, reliability, and scalability.'
  },
  {
    icon: BarChart3,
    title: 'Quantitative Research',
    description: 'Data-driven research methodologies that combine traditional finance with decentralized finance innovations.'
  },
  {
    icon: Zap,
    title: 'High-Frequency Trading',
    description: 'Ultra-low latency trading systems that execute thousands of trades per second across multiple markets.'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Sophisticated risk controls and monitoring systems to protect capital and ensure consistent performance.'
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Trading across traditional and decentralized markets worldwide, 24/7, with deep liquidity provision.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine rigorous research, advanced technology, and deep market expertise to create sustainable trading strategies in both traditional and decentralized markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}