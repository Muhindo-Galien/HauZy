import React from 'react';
import Menu from '../Menu';
import hauzyLogo from '../../../../../../static/images/HAUZI.png'

const NavBar = () => {
    return(
        <div className='bg-black flex flex-row items-center'>
            <div className='px-20'>
                <img src={hauzyLogo} alt='logo' className='w-32'/>
            </div>
            <div className='border-r h-7'></div>
            <Menu/>
        </div>
    );
};

export default NavBar;
