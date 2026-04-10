import { Layers, Rocket, User } from 'lucide-react';
import React from 'react';

const Steps = () => {
    const steps = [
        {
            id: "01",
            title: "Create Account",
            description:
                "Sign up for free in seconds. No credit card required to get started.",
            icon: <User size={40} className="text-[#9514FA]" />,
        },
        {
            id: "02",
            title: "Choose Products",
            description:
                "Browse our catalog and select the tools that fit your needs.",
            icon: <Layers size={40} className="text-[#9514FA]" />,
        },
        {
            id: "03",
            title: "Start Creating",
            description: "Download and start using your premium tools immediately.",
            icon: <Rocket size={40} className="text-[#9514FA]" />,
        },
    ]
    return (
        <div className="py-20 bg-white px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Title Section */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#101727] mb-4">
                    Get Started In 3 Steps
                </h2>
                <p className="text-[#627382] text-lg mb-16">
                    Start using premium digital tools in minutes, not hours.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-300 group text-center"
                        >
                            {/* Number Badge */}
                            <span className="absolute top-8 right-8 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg shadow-purple-200 ">
                                {step.id}
                            </span>

                            {/* Icon Circle */}
                            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 text-4xl">
                                {step.icon}
                            </div>

                            {/* Text content */}
                            <h3 className="text-2xl font-bold text-[#101727] mb-4">
                                {step.title}
                            </h3>
                            <p className="text-[#627382] leading-relaxed font-medium">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Steps;