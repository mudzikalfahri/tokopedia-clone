import Header from '../../components/Header';
import Image from 'next/image';
import { StarIcon, PlusCircleIcon, MinusCircleIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/basketSlice';


function ViewProduct({products}) {
    const router = useRouter();
    const {id} = router.query;
    const product = products[id];
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket(product))
    }

    return (
        <div>
            <Header />
            <main className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-x-5 p-5 max-w-screen-lg mx-auto mt-28">
                <div className="">
                    <Image className="rounded-md overflow-hidden" width={250} height={250} objectFit="contain" src={product.image}/>
                </div>

                <div className="">
                    <div className="font-bold text-lg text-gray-700">
                        {product.title}
                    </div>
                    <div className="flex my-2">
                        <StarIcon className="h-5 w-5 text-yellow-400"/>
                        <p className="text-sm text-gray-400 ml-1">4.8 (800 ulasan)</p>
                    </div>
                    <div className="my-2 text-3xl font-bold text-gray-700">Rp {product.price}rb</div>
                    <p className="text-xs font-semibold text-tokped_green bg-green-100 w-min p-1 rounded-sm">Cashback</p>
                    <div className="mt-3 flex border-t border-b border-gray-300">
                        <div className="w-20 h-8 text-sm font-bold text-tokped_green flex place-items-center justify-center border-b-2 border-tokped_green">Detail</div>
                        <div className="text-sm w-28 h-8 font-bold flex place-items-center justify-center text-gray-400">Info Penting</div>
                    </div>
                    <div className="my-2 text-gray-500 ">
                    {product.description}
                    </div>
                </div>


                <div className="mt-4 md:mt-0 col-span-2 md:col-span-1 flex justify-center">
                    <div className="w-11/12 flex flex-col border border-gray-300 rounded-md p-3">
                        {/* jumlah catatan */}
                        <div className="flex place-items-center justify-between">
                            <p className="font-bold text-md text-gray-700">Atur jumlah dan catatan</p>
                            <ChevronUpIcon className="w-5 text-gray-500"/>
                        </div>
                        
                        {/* input stok */}
                        <div className="flex place-items-center">
                            <div className="flex my-2">
                                <MinusCircleIcon className="w-4 text-gray-300"/>
                                <input type="text" value="1" className="w-10 text-center"/>
                                <PlusCircleIcon className="w-4 text-tokped_green"/>
                            </div>
                            <div className="stok mx-4 text-sm">
                                Stok <span className="font-bold">39</span>
                            </div>
                        </div>
                        {/* subtotal */}
                        <div className="flex place-items-center justify-between">
                            <p className="text-md text-gray-400">Subtotal</p>
                            <div className="my-2 text-lg font-bold text-gray-700">Rp1.799.000</div>
                        </div>
                        {/* button */}
                        <div className="flex">
                            <button className="py-2 rounded-md px-3 border border-tokped_green text-sm font-bold text-tokped_green m-2">Beli Langsung</button>
                            <button onClick={addItemToBasket} className="py-2 rounded-md px-3 m-2 bg-tokped_green text-sm font-bold text-white">+ Keranjang</button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const products = await fetch('https://fakestoreapi.com/products/').then(
      (res) => res.json() );
      return { props: {
        products: products,
      } };
}

export default ViewProduct;
