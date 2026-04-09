import React, { use } from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ productPromise, cart, setCart }) => {
    const products = use(productPromise);

    return (
        <div className="py-16 max-w-7xl mx-auto px-4">
            <div className="text-center mb-6">
                <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Premium Digital Tools
                </h2>
                <p className="text-gray-500 text-lg">
                    Choose from our curated collection of premium digital products
                    designed to boost your productivity and creativity.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (

                    <ProductCard key={product.id} product={product} cart={cart} setCart={setCart}></ProductCard>
                
                ))}
            </div>
        </div>
    );
};

export default ProductSection;