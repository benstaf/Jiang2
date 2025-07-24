import React from 'react';
import { BookOpen, Cpu, TrendingUp, Network } from 'lucide-react';

const researchAreas = [
  {
    icon: Cpu,
    title: 'Reinforcement Learning',
    description: 'Developing advanced RL algorithms that adapt to market conditions and optimize trading strategies in real-time.'
  },
  {
    icon: Network,
    title: 'Large Language Models',
    description: 'Leveraging LLMs for market sentiment analysis, news processing, and natural language understanding of market dynamics.'
  },
  {
    icon: TrendingUp,
    title: 'Decentralized Finance',
    description: 'Cutting-edge expertise in decentralized finance protocols, yield farming strategies, and cross-chain arbitrage opportunities.'
  },
  {
    icon: BookOpen,
    title: 'Market Making',
    description: 'Deep analysis of order book dynamics, liquidity patterns, and market making strategies across multiple venues.'
  }
];

export default function Research() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Approach           </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our research lab continuously explores the frontiers of quantitative trading, combining academic rigor with practical market applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                  <area.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {area.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Jiang Street, we operate as a research lab with trading bots attached to it. Our team of quantitative researchers, data scientists, and engineers work together to push the boundaries of what's possible in algorithmic trading. We believe that the future of quantitative trading lies in the convergence of reinforcement learning, large language models, and decentralized finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}