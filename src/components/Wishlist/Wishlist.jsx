import React, { useContext } from 'react';
import { WishlistContext } from '../Root/Root';
import WishlistContent from '../WishlistContent/WishlistContent';

const Wishlist = () => {
    const [wishlist, setWishlist] = useContext(WishlistContext)
    console.log(wishlist)

    return (
        <div>
            <div className='max-w-[1050px] mx-auto mt-10'>
                <h3 className='font-bold text-2xl'>WishList</h3>
            </div>
            <div>
                {
                    wishlist.map(gadget => <WishlistContent gadget={gadget}></WishlistContent>)
                }
            </div>

        </div>

    );
};

export default Wishlist;