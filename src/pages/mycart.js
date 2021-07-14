import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Header from "../components/Header";
import Image from 'next/image';
import { TrashIcon, BadgeCheckIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { MinusCircleIcon, PlusCircleIcon, ReceiptTaxIcon } from "@heroicons/react/outline";

function MyCart() {

    const cartitems = useSelector(selectItems);

    return (
        <div>
            <Header />
            
            <main className="px-5 md:px-0 md:w-10/12 mx-auto mt-32 grid grid-rows-2 grid-cols-2 md:grid-cols-3 md:grid-rows-1">
                {/* leftside */}
                <div className="col-span-2 flex flex-col place-items-center md:inline">
                    <h1 className="text-xl font-bold text-gray-700">Keranjang</h1>
                    <div className="w-11/12">
                        <div className="p-4 mt-4 shadow-md">
                            <h2 className="text-sm font-bold text-gray-700 mb-0.5 flex place-items-center"><span><BadgeCheckIcon className="w-4 h-4 text-purple-800 mr-1"/></span>Tokped Store</h2>
                            <p className="text-sm font-normal text-gray-400">Jakarta Utara</p>
                            <div className="my-4 flex">
                                <Image width={80} height={80} src="https://i.ibb.co/cy7h5R5/476ce1c4-3b37-4cf4-9ce6-b63584889140.jpg" className="rounded-md"/>
                                <div className="px-3 flex flex-col justify-between">
                                    <p className="text-md text-gray-600">FLIP LED Night Lampu Tidur - 1pcs</p>
                                    <p className="text-sm text-gray-600">1pcs</p>
                                    <p className="text-sm font-bold text-gray-700">Rp149.000</p>
                                </div>

                            </div>
                            <div className="flex place-items-center justify-between">
                                <p className="text-xs font-medium text-tokped_green">Tulis catatan untuk barang ini</p>
                                <div className="flex my-2">
                                <TrashIcon className="w-6 h-6 text-gray-400 mr-10"/>
                                <MinusCircleIcon className="w-6 text-gray-300"/>
                                <input type="text" readOnly value="1" className="w-10 text-center"/>
                                <PlusCircleIcon className="w-6 text-tokped_green"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* rightside */}
                <div className="flex justify-center col-span-2 md:col-span-1">
                    <div className="w-11/12 m-2 border-2 border-gray-100 rounded-lg">
                        <div className="border-b-2 border-gray-100 ">
                            <div className="px-2 py-2.5 rounded-md border border-gray-300 m-3 flex justify-between place-items-center">
                                <ReceiptTaxIcon className="w-7 text-tokped_green" />
                                <p className="font-bold text-gray-500">Makin hemat pakai promo</p>
                                <ChevronRightIcon className="w-6 text-gray-500" />
                            </div>
                        </div>
                        <div className="p-3">
                            <h2 className="font-bold text-gray-700 mb-1">Ringkasan belanja</h2>
                            <div className="flex justify-between py-3">
                                <p className="text-gray-400">Total Harga(1 barang)</p>
                                <p className="text-gray-400">Rp.149.000</p>
                            </div>
                            <hr className="my-1"/>
                            <div className="flex justify-between py-3">
                                <p className="font-bold text-gray-700">Total Harga</p>
                                <p className="font-bold text-gray-700">Rp.149.000</p>
                            </div>
                            
                        </div>
                        <div className="flex justify-center mb-4">
                            <button className="w-11/12 py-3 rounded-md bg-tokped_green filter hover:contrast-75">
                                <p className="text-md font-bold text-white">Beli (1)</p>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MyCart;
