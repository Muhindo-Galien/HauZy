import React from 'react';
import Menu from '../Menu';
import hauzyLogo from '../../../../../../static/images/HAUZI.png'

const NavBar = () => {
    return(
        <div className='bg-black flex flex-row items-center justify-between'>
            <div className='px-20 md:px-10 xsm:px-4 sm:px-4'>
                <img src={hauzyLogo} alt='logo' className='w-32'/>
            </div>
            <div className='border-r h-7 xsm:hidden sm:hidden'></div>
            <Menu/>
        </div>
    );
};

export default NavBar;
