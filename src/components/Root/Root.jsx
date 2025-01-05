import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export const CartContext = createContext(() => handleAddToCart(gadget))
export const GadgetContext = createContext([])
export const PriceContext = createContext(0)

const Root = () => {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const handleAddToCart = (gadget) => {
        console.log(gadget)
        const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = gadget
        const newCart = [...cart, gadget]
        setCart(newCart)
        setTotalPrice(totalPrice + price)
    }
    console.log(cart)
    return (
        <div>
            <Navbar></Navbar>

            <CartContext.Provider value={handleAddToCart}>
                <GadgetContext.Provider value={[cart, setCart]}>
                    <PriceContext.Provider value={[totalPrice, setTotalPrice]}>
                        <Outlet></Outlet>
                    </PriceContext.Provider>


                </GadgetContext.Provider>
            </CartContext.Provider>

            <Footer></Footer>

        </div>
    );
};

export default Root;