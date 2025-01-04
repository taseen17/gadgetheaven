import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProducts from '../Allproducts/AllProducts';

const Categories = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('gadgets.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    const products = category.map(product => <AllProducts></AllProducts> )
    
    return (
        <div className='w-1/4 h-[500px] p-4 rounded-xl bg-white border'>
            <div className='flex flex-col gap-3'>
                <Link to="allproducts"><button className='btn btn-block rounded-xl'>All Product</button></Link>
                <Link to="smartphones"><button className='btn btn-block rounded-xl'>Phones</button></Link>
                <Link to="accessories"><button className='btn btn-block rounded-xl'>Accessories</button></Link>
                <Link to="smartwatch"><button className='btn btn-block rounded-xl'>Smart Watches</button></Link>
                <Link to="macbook"><button className='btn btn-block rounded-xl'>MacBook</button></Link>
                <Link to="iphone"><button className='btn btn-block rounded-xl'>Iphone</button></Link>
            </div>
            
            
        </div>
    );
};

export default Categories;