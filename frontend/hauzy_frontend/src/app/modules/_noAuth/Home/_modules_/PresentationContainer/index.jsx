import React from 'react';
import NavBar from './NavBar';
import Presentation from './Presentation';
import hauzy_landing_page_image from '../../../../../static/images/hauzi_landing_page_Image.png';

const PresentationContainer = () => {
    return (
        <div>
            <div className='flex flex-row bg-black justify-between'>
                <div className='grid grid-cols-2me bg-black text-white pb-20'>
                    <NavBar />
                    <Presentation />
                </div>
                <img src={hauzy_landing_page_image}
                    alt='landing_image'
                    className='rounded-l-full bg-gradient-to-br from-slate-200 w-full h-auto' />
            </div>
        </div>
    );
}

export default PresentationContainer;