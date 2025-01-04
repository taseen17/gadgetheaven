import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { CartContext } from '../Root/Root';


const GadgetDetails = () => {

    const handleAddToCart = useContext(CartContext)

    const { product_id } = useParams()

    const data = useLoaderData()
    const gadget = data.find(gadget => gadget.product_id === product_id)
    console.log(gadget)

    const { product_id: currentproduct_id, product_title, product_image, category, price, description, Specification, availability, rating } = gadget

    return (
        <div className='p-5 pb-72 bg-[rgb(149,56,226)] '>
            <div className='mb-10 relative'>
                <h3 className='text-4xl mb-3 font-bold text-white text-center'>Product Details</h3>
                <p className='text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>

                <div className="hero bg-white max-w-[800px] mx-auto rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20 shadow-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="max-w-sm rounded-lg" />
                    <div className='space-y-3'>
                        <h1 className="text-3xl font-semibold">{product_title}</h1>
                        <p className='font-semibold text-xl'>Price: {price}$</p>
                        {
                            availability ? <p className='p-2 text-[#309C08]'>In Stock</p> : <p className='p-2 text-red-500'>Stock Out</p>
                        }
                        <p className="">
                            {description}
                        </p>
                        <p className='text-left'><span className='font-bold'>Specification:</span></p>
                        <ol className='space-y-2'>
                                <li className='mt-2'>1. {Specification[0]}</li>
                                <li>2. {Specification[1]}</li>
                                {
                                    Specification[2] ? <li>3. {Specification[2]}</li> : ""
                                }
                                {
                                    Specification[3] ? <li>4. {Specification[3]}</li> : ""
                                }
                                {
                                    Specification[4] ? <li>5. {Specification[4]}</li> : ""
                                }
                            </ol>
                        <p><span className='font-bold'>Rating:</span> {rating}</p>
                       
                        <button onClick={() => handleAddToCart(gadget)} className="btn btn-primary bg-[#9538E2] text-white mr-3">Add To Cart <HiOutlineShoppingCart /></button>
                        <a className="btn btn-circle text-xl"><FaRegHeart /></a>
                    </div>
                </div>
            </div>

            </div>
           

        </div>
    );
};

export default GadgetDetails;