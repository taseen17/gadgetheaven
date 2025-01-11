import React from 'react';
import { RxCrossCircled } from "react-icons/rx";

const WishlistContent = ({gadget}) => {
    return (
        <div className='max-w-[1050px] mx-auto mt-9 p-5 bg-white rounded-xl shadow-lg flex justify-between'>
            <img className='w-52 rounded-lg' src={gadget.product_image} alt="" />
            <div>
                <h3 className='font-semibold text-2xl'>{gadget.product_title}</h3>
                <p className='text-[#09080F99] mt-3'>{gadget.description}</p>
                <p className='font-semibold text-xl text-[#09080FCC] mt-3'>Price: {gadget.price}</p>
            </div>
            <div className='flex justify-end'>
                <button className='mb-16 ml-32 text-2xl bg-white'><RxCrossCircled /></button>

            </div>
        </div>
    );
};

export default WishlistContent;