import React from 'react';
import banner from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mb-80'>
            <div className="hero bg-[#9538E2] max-w-screen-xl mx-auto rounded-b-xl pt-4 pb-56">
                <div className="hero-content text-center text-white relative">
                    <img className='h-[450px] w-[800px] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/4 mt-12 max-sm:mt-24 bg-white border p-3' src={banner} alt="" />
                    <div className="">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                        <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices <br /> to the coolest accessories, we have it all!
                        </p>
                        <button className="btn bg-white text-[#9538E2] font-bold rounded-2xl"> <Link to="dashboard">Shop Now</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;