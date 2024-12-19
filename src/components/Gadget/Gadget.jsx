import React from 'react';

const Gadget = ({ gadget }) => {
    const {product_id, product_title, product_image, category, price, description, Specification, availability, rating} = gadget
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img className='h-[200px]'
                        src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}$ </p>
                    <div className="card-actions justify-start">
                        <button className="btn text-[#9538E2] font-semibold bg-white">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;