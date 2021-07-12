import Image from 'next/image';
import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

function ProductItem({product}) {
    return (
        <div className="flex flex-col shadow-md p-3 rounded-md" >
            <Image src={product.image} height={200} width={200} objectFit="contain"/>     
            <h4 className="text-xs font-semibol line-clamp-2">{product.title}</h4>
            <p className="text-xs font-bold text-gray-700">Rp {product.price*1000}</p>
            <p className="text-xs">Indonesia</p>
            <div className="flex place-items-center">
                <StarIcon className="h-4 w-4 text-yellow-400"/>
                <p className="text-xs text-gray-400">4.8</p>
            </div>
            
        </div>
    );
}

export default ProductItem;
