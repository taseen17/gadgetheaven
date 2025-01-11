import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { toast } from 'react-toastify';

export const CartContext = createContext(() => handleAddToCart(gadget))
export const GadgetContext = createContext([])
export const PriceContext = createContext(0)
export const HandleWishlistContext = createContext(() => handleAddToWishlist(gadget))
export const WishlistContext = createContext([])
export const DisableContext = createContext(false)

const Root = () => {

    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)

    const handleAddToCart = (gadget) => {
        console.log(gadget)
        const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = gadget
        const newCart = [...cart, gadget]
        setCart(newCart)
        toast("Added to Cart")
        setTotalPrice(totalPrice + price)
    }
    console.log(cart)

    const handleAddToWishlist = (gadget) => {
        console.log(gadget)
        const newWishlist = [...wishlist, gadget]
        const exist = wishlist.find((g) => g.product_id === gadget.product_id)

        if (exist) {
            toast("Cannot be added")
        }
        else {
            setWishlist(newWishlist)
            toast("Added to Wishlist")    
        }
    }
    console.log(wishlist)
    return (
        <div>
            <Navbar></Navbar>

            <CartContext.Provider value={handleAddToCart}>
                <HandleWishlistContext.Provider value={handleAddToWishlist}>
                    <WishlistContext.Provider value={[wishlist, setWishlist]}>
                        <DisableContext.Provider value={[isDisabled, setIsDisabled]}>
                            <GadgetContext.Provider value={[cart, setCart]}>
                                <PriceContext.Provider value={[totalPrice, setTotalPrice]}>
                                    <Outlet></Outlet>
                                </PriceContext.Provider>
                            </GadgetContext.Provider>
                        </DisableContext.Provider>
                    </WishlistContext.Provider>
                </HandleWishlistContext.Provider>
            </CartContext.Provider>

            <Footer></Footer>

        </div>
    );
};

export default Root;