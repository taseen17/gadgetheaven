import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export const CartContext = createContext(() => handleAddToCart(gadget))
export const GadgetContext = createContext([])

const Root = () => {

    const [cart, setCart] = useState([])

    const handleAddToCart = (gadget) => {
        console.log(gadget)
        const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = gadget
        const newCart = [...cart, gadget]
        setCart(newCart)
    }
    console.log(cart)
    return (
        <div>
            <Navbar></Navbar>

            <CartContext.Provider value={handleAddToCart}>
                <GadgetContext.Provider value={[cart, setCart]}>
                    <Outlet></Outlet>

                </GadgetContext.Provider>
            </CartContext.Provider>

            <Footer></Footer>

        </div>
    );
};

export default Root;