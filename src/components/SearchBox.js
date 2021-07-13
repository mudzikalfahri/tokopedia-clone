import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

function SearchBox() {
    return (
        <div className="hidden md:flex place-items-center pl-2 flex-grow h-full w-auto border-solid border border-gray-200 rounded-md">
            <input className="text-xs p-2 focus:outline-none flex-grow" type="text" placeholder='Cari di Tokopedia'/>
            <div className="bg-gray-100 w-8 h-8 flex place-items-center mx-auto rounded-r-md cursor-pointer hover:bg-gray-200">
                <SearchIcon className="h-5 w-5 text-gray-400 mx-auto"/>
            </div>
        </div>
    )
}

export default SearchBox
