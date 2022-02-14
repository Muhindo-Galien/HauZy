import React from 'react'

const ReviewCard = ({comment,grade,clientName,propertyCommented}) => {
    return (
        <div className='flex flex-row px-20 py-20 bg-gradient-to-r from-white md:py-10 xsm:py-5 sm:py-5 xsm:px-5 sm:px-5'>
            <div>
                <p className='text-5xl font-Poppins py-5 md:text-3xl xsm:text-2xl sm:text-2xl'>Here is what our clients<br /> are saying about us</p>
                <p className='text-2xl font-Poppins py-5'>{grade}</p>
                <p className='font-Mulish w-2/5 lg:w-fit py-5 md:w-fit xsm:w-fit sm:w-fit'>{comment}</p>
                <p className='font-Poppins'>{clientName}</p>

            </div>
            <img src={propertyCommented} alt='property' className='-z-10 w-auto lg:hidden md:hidden xsm:hidden sm:hidden' />
        </div>
    );
}

export default ReviewCard;