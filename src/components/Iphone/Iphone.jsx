import React from 'react';
import Gadget from '../Gadget/Gadget';
import { useLoaderData } from 'react-router-dom';

const Iphone = () => {

    const data = useLoaderData()
    
    const iphones = data.filter(iphone => iphone.category === 'Iphone')
    
    return (
        <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
            {
                iphones.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }

        </div>
    );
};

export default Iphone;