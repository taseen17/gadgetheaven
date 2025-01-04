import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';


const SmartPhones = () => {
    const data = useLoaderData()
    
    const smartPhones = data.filter(smartPhone => smartPhone.category === 'Smartphones')
    
    return (
        <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
            {
                smartPhones.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }
            
        </div>
    );
};

export default SmartPhones;