import React from 'react';
import ProductItem from './ProductItem';

function Product({products}) {
    return (
        <div className="px-5 md:px-0 md:w-11/12 mx-auto">
            <h1 className="font-bold text-xl md:text-2xl text-gray-700 mt-5 mb-5">Belanja lagi, yuk!</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {products.map((product , i) => (
                    <ProductItem product={product} key={i}/>
                ))}
            </div>      
        </div>
    )
}

export default Product;
