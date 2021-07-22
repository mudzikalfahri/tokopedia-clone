import { useDispatch, useSelector } from "react-redux";
import { minusItem, plusItem, removeFromBasket, selectItems } from "../slices/basketSlice";
import Header from "../components/Header";
import Image from 'next/image';
import { TrashIcon, BadgeCheckIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { MinusCircleIcon, PlusCircleIcon, ReceiptTaxIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import { useSession } from 'next-auth/client'

function MyCart() {
    const session = useSession();
    const cartItems = useSelector(selectItems);
    const dispatch = useDispatch();

    const remove = (product) => {
        dispatch(removeFromBasket(product));
    };

    const plus = (i) => {
        dispatch(plusItem(i));;
    };

    const minus = (i) => {
        dispatch(minusItem(i));
    };


    return (
        <div>
            <Head>
                <title>Keranjang Belanja</title>
            </Head>
            <Header />
            
            {!cartItems.length>0 ? (
                <div className="px-5 md:px-0 md:w-10/12 mx-auto mt-32 flex flex-col place-items-center">
                    <Image src="https://i.ibb.co/KhtBy5R/60adc47d.jpg" width={200} height={200} objectFit="contain"/>
                    <h1 className="text-2xl font-bold text-gray-700 mb-2.5 text-center">Wah, keranjang belanjamu kosong</h1>
                    <h2 className="text-gray-400 mb-4">Yuk, isi dengan barang-barang impianmu!</h2>
                    <Link href="/">
                        <button className="px-14 py-2 focus:outline-none rounded-md bg-tokped_green filter hover:brightness-95 duration-500">
                            <p className="text-md font-bold text-white">Mulai Belanja</p>
                        </button>
                    </Link>
                </div>
            ):(
            <main className="px-5 md:px-0 md:w-10/12 mx-auto mt-32 grid grid-rows-2 grid-cols-2 md:grid-cols-3 md:grid-rows-1">
                {/* leftside */}
                <div className="col-span-2 flex flex-col place-items-center md:inline">
                    <h1 className="text-xl font-bold text-gray-700">Keranjang</h1>
                    
                    <div className="w-11/12">
                        {cartItems.map((item, idx) => (
                            <div className="p-4 mt-4 shadow-md">
                            <h2 className="text-sm font-bold text-gray-700 mb-0.5 flex place-items-center"><span><BadgeCheckIcon className="w-4 h-4 text-purple-800 mr-1"/></span>Tokped Store</h2>
                            <p className="text-sm font-normal text-gray-400">Jakarta Utara</p>
                            <div className="my-4 flex">
                                <Image width={80} height={80} src={item.image} className="rounded-md" objectFit="contain"/>
                                <div className="px-3 flex flex-col justify-between">
                                    <p className="text-md text-gray-600">{item.title} - {item.quantity}pcs</p>
                                    <p className="text-sm text-gray-600">{item.quantity}pcs</p>
                                    <p className="text-sm font-bold text-gray-700">Rp{item.price * item.quantity}rb</p>
                                </div>

                            </div>
                            <div className="flex place-items-center justify-between">
                                <p className="text-xs font-medium text-tokped_green">Tulis catatan untuk barang ini</p>
                                <div className="flex my-2">
                                <TrashIcon onClick={() => remove(item)} className="cursor-pointer w-6 h-6 text-gray-400 mr-10"/>
                                <MinusCircleIcon onClick={() => {if (item.quantity > 1) minus(idx)}} className={item.quantity>1 ? `w-6 text-tokped_green cursor-pointer disabled` : `w-6 text-gray-400 cursor-default`}/>
                                <input type="text" readOnly value={item.quantity} className="w-10 text-center focus:outline-none"/>
                                <PlusCircleIcon className="w-6 text-tokped_green cursor-pointer" onClick={() => plus(idx)}/>
                                </div>
                            </div>
                        </div>
                        ))}
                        
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
                                <p className="text-gray-400">Total Harga({cartItems.reduce((q,i) => (q + i.quantity),0)} barang)</p>
                                <p className="text-gray-400">Rp.{cartItems.reduce((sub, cartItem) => (sub + cartItem.price * cartItem.quantity),0)}rb</p>
                            </div>
                            <hr className="my-1"/>
                            <div className="flex justify-between py-3">
                                <p className="font-bold text-gray-700">Total Harga</p>
                                <p className="font-bold text-gray-700">Rp.{cartItems.reduce((sub, cartItem) => (sub + cartItem.price * cartItem.quantity),0)}rb</p>
                            </div>
                            
                        </div>
                        <div className="flex justify-center mb-4">
                            <button className="w-11/12 py-3 rounded-md bg-tokped_green filter hover:brightness-95 duration-500">
                                <p className="text-md font-bold text-white">Beli ({cartItems.length})</p>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            )}
            <Footer />
        </div>
    )
}

export default MyCart;
