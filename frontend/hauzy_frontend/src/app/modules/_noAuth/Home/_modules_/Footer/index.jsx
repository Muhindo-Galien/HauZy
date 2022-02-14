import React from 'react';
import {
    AiFillTwitterCircle,
    AiFillFacebook,
    AiFillInstagram
} from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='flex flex-row justify-around items-center py-20'>
                <div>
                    <p className='py-10 font-Poppins text-2xl'>COMPANY</p>
                    <p className='cursor-pointer py-2 font-Mulish'>Real Estate</p>
                    <p className='cursor-pointer py-2 font-Mulish'>Invest</p>
                    <p className='cursor-pointer py-2 font-Mulish'>Contact</p>
                    <p className='cursor-pointer py-2 font-Mulish'>About us</p>
                </div>
                <div>
                    <p className='py-10 text-center font-Poppins text-2xl'>CONTACT</p>
                    <p className='cursor-pointer py-2 text-center font-Mulish'><a href="mailto:">jonathanzihindula@gmai.com</a></p>
                    <p className='cursor-pointer py-2 text-center font-Mulish'><a href='tel'>+250 789 355 630</a></p>
                    <div className='py-2 flex flex-row justify-center'>
                        <AiFillTwitterCircle className='text-2xl mx-2 cursor-pointer' />
                        <AiFillFacebook className='text-2xl mx-2 cursor-pointer' />
                        <AiFillInstagram className='text-2xl mx-2 cursor-pointer' />
                    </div>
                </div>
                <div>
                    <p className='py-10 text-center font-Poppins text-2xl'>ADRESS</p>
                    <p className='py-2 text-center font-Mulish'>751 Maputo street</p>
                    <p className='py-2 text-center font-Mulish'>First building</p>
                    <p className='py-2 text-center font-Mulish'>Guest quarter</p>
                </div>
            </div>
            <p className='text-center py-3 font-Mulish'> HauZy copyright&#174;{new Date().getFullYear()}, all right reserved</p>
        </div>
    );
}

export default Footer;