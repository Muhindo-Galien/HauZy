import React from 'react';

const Menu  = () => {
    return (
        <div className='text-white flex flex-row justify-around items-center w-full font-Mulish'>
            <p className='cursor-pointer'>Real Estate</p>
            <p className='cursor-pointer'>Invest</p>
            <p className='cursor-pointer'>Contact</p>
            <p className='cursor-pointer'>About us</p>
            <button className='bg-white text-black px-5 py-2 rounded-md font-Poppins'>Sign in</button>
        </div>
    );
};

export default Menu