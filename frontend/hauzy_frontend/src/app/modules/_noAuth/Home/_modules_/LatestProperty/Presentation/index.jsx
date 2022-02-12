import React from 'react';
import house_icon from '../../../../../../static/images/house_icon.svg';

const PropertyPrsentation = () => {
    return (
        <div className='flex flex-cols py-20 px-32'>
            <div className='px-5 py-5 rounded-full bg-gray-200'>
                <img src={house_icon} alt='house_icon' className='w-12 bg-white pt-3 pb-3 pl-3 pr-3 rounded-full shadow-lg' />
            </div>
            <div className=' flex flex-row'>
                <p className='text-4xl px-10 font-Poppins text-slate-800 border-r border-slate-300'>Latest Property<br /> for Rent</p>
                <p className='font-Mulish text-sm text-slate-600 px-10'>
                    Propietary technology, latest market data and strong real<br />
                    estate expertise allow us to reach potential buyers and present <br />
                    them with a well price
                </p>
            </div>
        </div>
    );
}

export default PropertyPrsentation;