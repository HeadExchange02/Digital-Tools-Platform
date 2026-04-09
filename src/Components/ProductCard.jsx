import { Check } from 'lucide-react';
import React, { useState } from 'react';

const ProductCard = ({ product, cart, setCart }) => {
    const [isBuyed, setIsBuyed] = useState(false);

    const handleBuy = () =>{
        setIsBuyed(true);
        setCart([...cart, product]);
    }

    const tagStyles = {
        "best seller": "bg-[#FEF3C6] text-[#BB4D00]",
        popular: "bg-blue-100 text--600 text-[#9514FA]",
        new: "bg-green-100 text-green-600",
    };
    return (
        <div className='card card-body border border-slate-200 rounded-3xl shadow-2xl'>

            {/* Tag */}
            <div
                className={`absolute top-6 right-6 ${tagStyles[product.tagType?.toLowerCase()] || "bg-gray-100 text-gray-600"} text-[10px] font-bold px-3 py-1 rounded-full  tracking-widest shadow-sm inline-block whitespace-nowrap`}
            >
                {product.tagType}
            </div>

            {/* Icon */}
            <div className="w-15 h-15 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-purple-50">
                <img src={`/${product.icon}`} alt={product.name} />
            </div>

            <h3 className="text-2xl font-bold text-[#101727] mb-4 tracking-tight">
                {product.name}
            </h3>

            <p className="text-[#627382] text-base leading-relaxed mb-5 h-12 overflow-hidden">
                {product.description}
            </p>

            {/* pricing */}
            <div className="flex items-baseline gap-1 mb-8">
                <div className="text-3xl font-bold text-[#101727]">
                    ${product.price}
                </div>

                <div className="text-[#627382] font-bold uppercase text-xs">
                    /{product.period}
                </div>
            </div>


            {/* features list  */}
            <div className="space-y-3 mb-6 grow">
                {product.features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 text-gray-600 font-semibold text-sm"
                    >
                        <div className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px]">
                            <Check size={10} strokeWidth={3} />
                        </div>
                        <div>{feature}</div>
                    </div>
                ))}
            </div>
            <button
                className="btn bg-linear-130 from-violet-800 to-purple-500 hover:bg-[#6D28D9] text-white border-none rounded-full px-10 h-16 font-bold capitalize text-xl shadow-lg shadow-purple-200 w-full sm:w-auto transition-all duration-300 transform hover:scale-105"
                onClick={handleBuy}>
                {isBuyed ? "Added to cart" : "Buy Now"}
            </button>
        </div>
    );
};

export default ProductCard;