import React from 'react';
import Image from 'next/image';
import { SearchIcon, ShoppingCartIcon, BellIcon, MailIcon } from '@heroicons/react/solid';

function Header() {
    return (
        <header>
            {/* Navtop */}
           <div className="px-2 py-1 bg-gray-100 flex justify-between lg:px-7">
               {/* topleft */}
               <div className="flex place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className='text-xs text-gray-500 md:ml-1'>Download Tokopedia App</p>
               </div>
               {/* topright */}
               <div className="flex place-items-center">
                <p className='text-xs text-gray-500 mx-2 md:mx-3'>Tentang Tokopedia</p>
                <p className='text-xs text-gray-500 mx-2 md:mx-3'>Mitra Tokopedia</p>
                <p className='text-xs text-gray-500 mx-2 md:mx-3'>Tokopedia Care</p>
               </div>
           </div>

            {/* bottom nav */}
           <div className="px-5 lg:px-7 py-1 w-full h-auto flex place-items-center text-gray-500 shadow-md justify-between md:justify-items-start">
               <Image width={150} height={50} className=''objectFit="contain" src="https://i.ibb.co/rvbmzzW/Logo-Tokopedia.png"/>
               <p className='text-xs mx-3 py-1 px-2 align-middle hover:bg-gray-100 rounded-sm hover:text-tokped_green duration-200 cursor-pointer'>Kategori</p>
               <div className="hidden md:flex place-items-center pl-2 flex-grow h-full w-auto border-solid border border-gray-200 rounded-md">
                   <input className="text-xs p-2 focus:outline-none flex-grow" type="text" placeholder='Cari di Tokopedia'/>
                    <div className="bg-gray-100 w-8 h-8 flex place-items-center mx-auto rounded-r-md cursor-pointer hover:bg-gray-200">
                        <SearchIcon className="h-5 w-5 text-gray-400 mx-auto"/>
                    </div>
               </div>
                <div className="flex place-items-center md:w-36 justify-between md:flex-grow-0 border-r-2 border-gray-300 px-2 md:px-4">
                    <div className="w-8 h-8 flex place-items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer">
                        <ShoppingCartIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="w-8 h-8 flex place-items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer">
                        <BellIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="w-8 h-8 flex place-items-center justify-center rounded-md hover:bg-gray-100 cursor-pointer">
                        <MailIcon className="h-5 w-5 text-gray-500" />
                    </div>
                </div>
                <div className="flex place-items-center px-2 md:pl-4">
                    <Image className="rounded-full" width={30} height={30} src="https://i.ibb.co/JKHpjnq/default-toped-16.jpg"/>
                    <p className="text-xs ml-2">Mudzik</p>
                </div>
           </div>
        </header>
    )
}

export default Header
