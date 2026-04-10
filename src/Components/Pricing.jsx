import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];
    return (
        <div className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-6xl font-black text-[#101727] mb-6">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[#627382] text-lg mb-16 max-w-2xl mx-auto font-medium">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-[40px] transition-all duration-500 border ${
                plan.isPopular
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-[#4F39F6] shadow-2xl shadow-purple-200 lg:scale-105 z-10"
                  : "bg-white text-gray-900 border-gray-100 hover:border-purple-100 hover:shadow-xl"
              }`}
            >
              {/* "Most Popular" Tag */}
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#bb4d00] text-xs font-medium px-5 py-2 rounded-full uppercase tracking-widest shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="text-left">
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <p
                  className={`text-sm font-medium mb-8 ${plan.isPopular ? "text-purple-100" : "text-gray-400"}`}
                >
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-5xl font-black">${plan.price}</span>
                  <span
                    className={`text-sm font-bold uppercase ${plan.isPopular ? "text-purple-100" : "text-gray-400"}`}
                  >
                    /Month
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-4 mb-12">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check
                        size={18}
                        className={
                          plan.isPopular ? "text-white" : "text-green-500"
                        }
                      />
                      <span
                        className={`text-sm font-semibold ${plan.isPopular ? "text-white" : "text-gray-600"}`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className={`w-full py-5 rounded-2xl font-bold transition-all active:scale-95 ${
                    plan.isPopular
                      ? "bg-white text-[#7C3AED] hover:bg-gray-50 cursor-pointer"
                      : "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-lg shadow-purple-100 cursor-pointer"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Pricing;