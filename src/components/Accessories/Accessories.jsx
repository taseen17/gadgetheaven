import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const Accessories = () => {
    const data = useLoaderData()

    const accessories = data.filter(accessory => accessory.category === 'Accessories')

    return (
        <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
            {
                accessories.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }

        </div>
    );
};

export default Accessories;