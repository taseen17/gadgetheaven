import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const SmartWatch = () => {

    const data = useLoaderData()
    
    const SmartWaches = data.filter(smartWatch => smartWatch.category === 'Smartwatches')
    
    return (
        <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
            {
                SmartWaches.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }

        </div>
    );
};

export default SmartWatch;