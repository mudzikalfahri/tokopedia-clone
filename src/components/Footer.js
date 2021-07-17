import React from 'react'

function Footer() {
    return (
        <div class="grid grid-cols-3 grid-rows-3 p-4 md:p-14 gap-x-3 gap-y-2 md:grid-cols-6 md:grid-rows-1 border-t border-gray-300 mt-20 max-w-screen-2xl mx-auto">
            <div className="h-52">
                <h2 className="font-bold text-gray-700 text-lg mb-3 mt-2 ">Tokopedia</h2>
                <ul className="text-gray-500 text-sm">
                    <li className="mb-2">Tentang Tokopedia</li>
                    <li className="mb-2">Karir</li>
                    <li className="mb-2">Blog</li>
                    <li className="mb-2">TokoPoints</li>
                </ul>
            </div>
            <div className="h-52  ">
            <h2 className="font-bold text-gray-700 text-lg mb-3 mt-2 ">Beli</h2>
                <ul className="text-sm text-gray-500">
                    <li className="mb-2">Tagihan & Top Up</li>
                    <li className="mb-2">Tokopedia COD</li>
                    <li className="mb-2">Tukar Tambah</li>
                    <li className="mb-2">Daftar Official Store</li>
                </ul>
            </div>
            <div className="h-52  ">
                <h2 className="font-bold text-gray-700 text-lg mb-3 mt-2 ">Bantuan dan Panduan</h2>
                <ul className="text-sm text-gray-500">
                    <li className="mb-2">Tokopedia Care</li>
                    <li className="mb-2">Syarat dan Ketentuan</li>
                    <li className="mb-2">Kebijakan Privasi</li>
                    
                </ul>
            </div>
            <div className="col-span-3 row-span-2 flex flex-col place-items-center md:col-span-3 md:row-span-1">
                <img className="object-cover" src="https://i.ibb.co/jfX3yxY/SEOcontent1.jpg" alt="" />
                <div className="flex place-items-center justify-center mt-5 mb-5">
                    <img className="h-11" src="https://i.ibb.co/sKLm4KW/pngfind-com-play-button-png-transparent-1855993.png" alt="" />
                    <img className="h-11" src="https://i.ibb.co/T8YzhhD/app-store-logo.png" alt="" />
                </div>
                <p className="text-sm text-gray-500">© 2009 - 2021, PT. Tokopedia.</p>
            </div>
        </div>
    )
}

export default Footer
