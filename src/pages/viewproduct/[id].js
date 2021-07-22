import Header from '../../components/Header';
import Image from 'next/image';
import { StarIcon, PlusCircleIcon, MinusCircleIcon, ChevronUpIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/basketSlice';
import Head from 'next/head';
import Footer from '../../components/Footer';


function ViewProduct({products}) {
    
    const router = useRouter();
    const {id} = router.query;
    const product = products.find(product => product.id==id)
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket(product))
    }

    return (
        <div >
            <Head>
                <title>Product - {product.title}</title>
            </Head>
            <Header />
            <div className="pl-2 max-w-screen-lg mx-auto mt-28 flex place-items-center">
                <p className="text-sm font-normal text-tokped_green">Home</p>
                <p className="flex place-items-center text-sm font-normal text-tokped_green line"><ChevronRightIcon className="h-4 w-4 text-gray-400 mx-1"/>{product.category}</p>
                <p className="flex place-items-center text-sm font-normal text-gray-500"><ChevronRightIcon className="h-4 w-4 text-gray-400 mx-1"/><span className="w-52 line-clamp-1">{product.title}</span></p>
            </div>
            <main className="grid grid-cols-2 grid-rows-1 md:grid-cols-3 md:grid-rows-1 gap-x-5 p-5 max-w-screen-lg mx-auto mt-4">
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


                <div className="mt-4 fixed bottom-0 md:w-auto md:static bg-white w-full mb-2 md:mt-0 col-span-2 md:col-span-1">
                    <div className="w-11/12 md:h-auto flex flex-col border border-gray-300 rounded-md p-3">
                    
                        {/* jumlah catatan */}
                        <div className="flex place-items-center justify-between">
                            <p className="font-bold text-md text-gray-700">Atur jumlah dan catatan</p>
                            <ChevronUpIcon className="w-5 text-gray-500"/>
                        </div>
                        
                        {/* input stok */}
                        <div className="flex place-items-center">
                            <div className="flex my-2">
                                <MinusCircleIcon className="w-4 text-gray-300"/>
                                <input type="text" readOnly value="1" className="w-10 text-center"/>
                                <PlusCircleIcon className="w-4 text-tokped_green"/>
                            </div>
                            <div className="stok mx-4 text-sm">
                                Stok <span className="font-bold">999+</span>
                            </div>
                        </div>
                        {/* subtotal */}
                        <div className="flex place-items-center justify-between">
                            <p className="text-md text-gray-400">Subtotal</p>
                            <div className="my-2 text-lg font-bold text-gray-700">Rp {product.price}rb</div>
                        </div>
                        {/* button */}
                        <div className="flex w-full">
                            <button className="w-1/2 md:w-auto py-2 rounded-md px-3 border border-tokped_green focus:outline-none text-sm font-bold text-tokped_green m-2">Beli Langsung</button>
                            <button onClick={addItemToBasket} className="w-1/2 md:w-auto py-2 focus:outline-none filter hover:brightness-95 rounded-md px-3 m-2 bg-tokped_green text-sm font-bold text-white">+ Keranjang</button>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
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
