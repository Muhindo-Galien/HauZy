import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const Presentation = () => {
    return (
        <div className='flex flex-row bg-black'>
            <div className='bg-black text-white'>
                <div>
                    <p className='text-7xl px-20 mt-40 font-Poppins'>Rent and sell your property without comissions</p>
                    <p className='pl-32 mt-10 font-Mulish '>
                        Architect your future through <br />
                        scalable and low-cost household investments.<br />
                        And save thousands.
                    </p>
                </div>
                <div className='pl-32 mt-10 font-Poppins flex flex-row'>
                    <button className='pl-5 pr-1 py-4 border-white border'>
                        <BsArrowUpRight className='float-right ml-20 -mt-2 mr-1 font-Poppins' />
                        <span>Rent</span>
                    </button>
                    <button className='pl-5 pr-1 py-4 border-white border ml-5'>
                        <BsArrowUpRight className='float-right ml-20 -mt-2 mr-1 ' />
                        <span>Sell</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Presentation;