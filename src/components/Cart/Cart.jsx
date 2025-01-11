import React, { useContext, useState } from 'react';
import { GoSortDesc } from "react-icons/go";
import { GadgetContext, PriceContext } from '../Root/Root';
import CartContent from '../CartContent/CartContent';
import group from '../../assets/Group.png'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useContext(GadgetContext)
    const [totalPrice, setTotalPrice] = useContext(PriceContext)
    console.log(cart)

    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate('/')
    }

    const handleSort = () => {
        const sortedCart = [...cart].sort((a, b) => b.price - a.price)
        setCart(sortedCart)
    }

    const handlePurchase = () => {
        document.getElementById('my_modal_1').showModal()
        const afterPurchase = setCart([])
        const afterPayment = setTotalPrice(0)

    }
    return (
        <div>
            <div className='flex justify-between max-w-[1050px] mx-auto mt-10'>
                <h3 className='font-bold text-2xl'>Cart</h3>

                <div className='flex gap-7'>
                    <p className='mr-24 font-bold text-2xl'>Total cost: {totalPrice} </p>
                    <button onClick={() => handleSort()} className='btn rounded-2xl bg-transparent text-[#9538E2] font-semibold text-base'>Sort by Price <GoSortDesc /></button>
                    <button className="btn rounded-2xl bg-[#9538E2] text-white font-medium text-base" onClick={() => handlePurchase()}>Purchase</button>
                </div>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                       <div className='flex justify-center mb-2'> <img className='' src={group} alt="" /></div>
                       <h3 className="font-bold text-lg text-center">Payment Successfully</h3>
                        <p className="py-4 text-center">Thanks for purchasing.</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={() => handleNavigation()} className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <div>
                {
                    cart.map(gadget => <CartContent gadget={gadget}></CartContent>)
                }
            </div>

        </div>

    );
};

export default Cart;