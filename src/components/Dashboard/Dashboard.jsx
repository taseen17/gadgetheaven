import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className='bg-[#9538E2] p-5'>
                <h2 className='text-3xl text-center font-bold text-white mb-3'>Dashboard</h2>
                <p className='text-white text-center text-base font-normal'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>

                <div className='flex justify-center mt-9 gap-7'>
                    <NavLink to="cart"><button className='text-white btn bg-transparent px-5 rounded-xl'>Cart</button></NavLink>
                    <NavLink to="wishlist"><button className='text-white btn bg-transparent px-5 rounded-xl'>Wishlist</button></NavLink>
                </div>

            </div>
            <Outlet></Outlet>

        </div>

    );
};

export default Dashboard;