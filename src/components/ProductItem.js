import Image from 'next/image';
import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

function ProductItem({product}) {
    return (
        <div className="flex flex-col p-3 shadow-md border rounded-md cursor-pointer group" >
            <div className="flex place-items-center p-3 justify-center">
                <Image src={product.image} height={150} width={150} objectFit="contain"/> 
            </div>
            <h4 className="text-xs font-semibol line-clamp-2 pb-1">{product.title}</h4>
            <p className="text-xs font-bold text-gray-700 pb-1">Rp {product.price*1000}</p>
            <p className="text-xs font-semibold text-tokped_green bg-green-100 w-min p-1 rounded-sm mb-1">Cashback</p>
            <div className="h-5 overflow-hidden relative">
                <p className="absolute top-0 group-hover:-top-8 duration-300 text-xs text-gray-400 pb-1">Indonesia</p>
                <p className="absolute top-8 group-hover:top-0 duration-300 text-xs text-gray-400 pb-1">Tokoped Store</p>
            </div>
            <div className="flex place-items-center pb-1">
                <div className="flex place-items-center border-r pr-1 border-gray-400">
                    <StarIcon className="h-4 w-4 text-yellow-400"/>
                    <p className="text-xs text-gray-400 ml-1">4.8</p>
                </div>
                <p className="ml-1 text-xs text-gray-400">Terjual 18</p>

            </div>
            
            
        </div>
    );
}

export default ProductItem;
