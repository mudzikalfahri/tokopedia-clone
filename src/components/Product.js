
import React from 'react';
import ProductItem from './ProductItem';

function Product({products}) {
    return (
        <div className="px-5 md:px-0 md:w-4/5 mx-auto">
            <h1 className="font-bold text-xl text-gray-700 mt-5 mb-5">Belanja Yuk!</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {products.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
            
        </div>
    )
}

export default Product
