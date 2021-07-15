import React, { useEffect, useState } from 'react';
import {category} from './category_data';

function Category() {
    const [categoryData] = useState(category)
    return (
        <div className="px-5 md:px-0 md:md:w-11/12 mx-auto mt-3 md:mt-10 mb-10 cursor-pointer">
            <h1 className="font-bold text-xl md:text-2xl text-gray-700 mt-5 mb-5">Cari kategori apa?</h1>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 gap-y-5">
                {categoryData.map(cat => (
                    <div key={cat.id} className="">
                        <div className="filter hover:brightness-90 duration-500 rounded-md overflow-hidden">
                            <img src={cat.img}/>
                        </div>
                        <p className="font-semibold text-xs md:text-sm text-center mt-1">{cat.name}</p>
                    </div>
                    
                ))}
            </div>
            <hr className="mt-10"/>
        </div>
    )
}

export default Category
