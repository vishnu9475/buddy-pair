import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PricingCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="text-white">
      {/* Price Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <div className="flex items-baseline mt-2">
          <span className="text-6xl font-bold">{data.currency}{data.price}</span>
          <span className="text-2xl font-medium text-zinc-400">/-{data.period}</span>
        </div>
      </div>

      {/* Tiers & Features */}
      <div className="space-y-6">
        {data.limits.map((limit, index) => (
          <div key={index} className="border-t border-zinc-800 pt-4">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-white mt-1 shrink-0" />
              <div className="text-[15px]">
                <p className="font-semibold">{limit.label}</p>
                <p className="text-zinc-400">View up to {limit.profiles} profiles per {limit.timeframe}</p>
                <p className="text-zinc-400">Send up to {limit.requests} requests per {limit.timeframe}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="border-t border-zinc-800 pt-4 pb-6">
          <div className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-white mt-1 shrink-0" />
            <div className="text-[15px]">
              <p className="font-semibold text-zinc-100 uppercase tracking-tight">Premium Features</p>
              <ul className="mt-2 space-y-2 pl-2">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="text-zinc-400 flex items-start">
                    <span className="mr-2 text-zinc-600 mt-[-2px]">•</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Button */}
      <button className="w-full mt-4 bg-[#2a2a2a] py-5 rounded-3xl text-2xl font-bold text-zinc-400 active:scale-95 transition-all">
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;