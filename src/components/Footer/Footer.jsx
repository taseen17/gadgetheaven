import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20 p-7 bg-white border'>
            <h3 className='font-bold text-3xl text-center mb-2'>Gadget Heaven</h3>
            <p className='text-center'>Leading the way in cutting-edge technology and innovation.</p>
            <div className="divider"></div>
            <footer className="footer place-items-center bg-white text-[#09080F] p-10 text-center">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Career</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;