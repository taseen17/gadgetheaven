import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <h2 className='font-bold text-4xl mb-7 text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='w-4/5 mx-auto flex gap-4'>
            <Categories></Categories>
            <Gadgets></Gadgets>

            </div>
           
            
        </div>
    );
};

export default Home;