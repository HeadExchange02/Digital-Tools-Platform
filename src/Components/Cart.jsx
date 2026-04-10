import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const handleCheckOut = () => {
        if (cart.length === 0) return;
        toast.success("Payment Successful");
        setCart([])
    }

    const handleDelete = (item) => {
        const filterArray = cart.filter(c => c.id !== item.id)
        setCart(filterArray)
    }
    return (
        <div className='w-8/12 mx-auto mt-6 space-y-3 mb-3'>
            <h1 className='text-2xl text-center font-semibold text-violet-500'>Cart - {cart.length}</h1>
            <div className='space-y-6 border border-violet-300 rounded-2xl p-5'>

                {
                    cart.length === 0 ? <p className='text-center text-3xl text-violet-500 font-semibold p-10'>Cart is Empty</p> :
                        <>
                            <div className='space-y-3'>
                                {
                                    cart.map(item =>
                                        <div className='border border-violet-500 rounded-2xl shadow-xl p-5 flex gap-6 justify-between' key={item.id}>
                                            <div className='flex gap-6'>
                                                <div className=' flex gap-3'>
                                                    <img className='w-15 h-15 border-3 border-violet-500 rounded-full' src={item.icon} />

                                                </div>
                                                <div>
                                                    <h2 className='text-xl font-bold'>{item.name}</h2>
                                                    <p className='font-semibold'>${item.price}/{item.period}</p>
                                                </div>
                                            </div>
                                            <button className='text-2xl hover:bg-red-200 p-3 rounded-2xl text-red-500' onClick={() => handleDelete(item)}>Remove</button>
                                        </div>
                                    )
                                }
                            </div>

                            <div className='flex justify-between mt-5 p-5 bg-violet-200 rounded-2xl'>
                                <h2 className='text-2xl font-semibold'>Total cost :</h2>
                                <p className='text-2xl font-semibold'>${totalPrice}</p>
                            </div>

                            <button
                                onClick={handleCheckOut}
                                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold py-4 rounded-full transition-all shadow-lg cursor-pointer shadow-purple-100 active:scale-[0.98]"
                            >
                                Proceed To Checkout
                            </button>
                        </>


                }


            </div>


        </div>
    );
};

export default Cart;