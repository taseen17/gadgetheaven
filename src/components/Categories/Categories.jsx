import React from 'react';

const Categories = () => {
    return (
        <div className='w-1/4 h-[500px] p-4 rounded-xl bg-white border'>
            <div className='flex flex-col gap-3'>
                <button className='btn rounded-xl'>All Product</button>
                <button className='btn rounded-xl'>Phones</button>
                <button className='btn rounded-xl'>Accessories</button>
                <button className='btn rounded-xl'>Smart Watches</button>
                <button className='btn rounded-xl'>MacBook</button>
                <button className='btn rounded-xl'>Iphone</button>
            </div>
            
            
        </div>
    );
};

export default Categories;