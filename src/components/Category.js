import React, { useEffect, useState } from 'react';
import {category} from './category_data';

function Category() {
    const [categoryData] = useState(category)
    return (
        <div className="w-4/5 mx-auto mt-3 md:mt-10 mb-10">
            <h1 className="font-bold text-xl text-gray-700 mt-5 mb-5">Cari kategori apa?</h1>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 gap-y-5">
                {categoryData.map(cat => (
                    <div key={cat.id} className="">
                        <div className=" rounded-md overflow-hidden">
                            <img src={cat.img}/>
                        </div>
                        <p className="font-semibold text-xs md:text-sm text-center mt-1">{cat.name}</p>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Category
