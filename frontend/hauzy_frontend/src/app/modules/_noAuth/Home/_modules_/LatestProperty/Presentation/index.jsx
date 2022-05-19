import React from 'react';
import house_icon from '../../../../../../static/images/house_icon.svg';

const PropertyPresentation = () => {
    return (
        <div className='flex flex-row py-20 lg:py-10 px-32 lg:px-28 md:px-10 xsm:px-5 sm:px-5'>
            <div className='px-5 py-5 lg:h-20 lg:py-4 lg:px-4 xsm:hidden sm:hidden  rounded-full bg-gray-200 md:bg-transparent'>
                <img src={house_icon} alt='house_icon' className='w-12 md:w-16  bg-white pt-3 pb-3 pl-3 pr-3 rounded-full shadow-lg md:shadow-lg md:bg-gray-200' />
            </div>
            <div className=' flex flex-row xsm:flex-col sm:flex-col '>
                <p className='text-4xl px-10 font-Poppins text-slate-800 border-r border-slate-300 lg:text-2xl md:text-xl sm:px-0 xsm:px-0'>Latest Property<br /> for Rent</p>
                <p className='font-Mulish text-sm text-slate-600 px-10 xsm:mt-2 sm:mt-2 xsm:px-0 sm:px-0'>
                    Propietary technology, latest market data and strong real<br />
                    estate expertise allow us to reach potential buyers and present <br />
                    them with a well price
                </p>
            </div>
        </div>
    );
}

export default PropertyPresentation;