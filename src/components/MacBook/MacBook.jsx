import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const MacBook = () => {

    const data = useLoaderData()
    
    const macBooks = data.filter(macBook => macBook.category === 'MacBook')
    
    return (
        <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
            {
                macBooks.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }

        </div>
    );
};

export default MacBook;