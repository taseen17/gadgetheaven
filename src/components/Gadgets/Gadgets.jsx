import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        fetch('gadgets.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])
    return (
        <div>

            <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1">
                {
                    gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                }
            </div>
            
        </div>
    );
};

export default Gadgets;