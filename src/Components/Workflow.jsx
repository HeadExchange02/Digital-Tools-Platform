import React from 'react';

const Workflow = () => {
    return (
        <div className="py-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                    Ready to Transform Your Workflow?
                </h2>
                <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
                    Join thousands of professionals who are already using Digitools to
                    work smarter.Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                    <button className="bg-white text-[#9514FA] px-7 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-purple-900/30 hover:bg-gray-200 active:scale-95 transition-all duration-300 w-full sm:w-auto cursor-pointer">
                        Explore Products
                    </button>
                    <button className="border-2 border-white text-white px-7 py-4 rounded-full font-semibold text-lg hover:bg-white/10 active:scale-95 transition-all duration-300 w-full sm:w-auto cursor-pointer">
                        View Pricing
                    </button>
                </div>
                <p className="text-[#FFFFFF] text-sm  opacity-80 tracking-wide">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default Workflow;