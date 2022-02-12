import React from 'react'

const ReviewCard = ({comment,grade,clientName,propertyCommented}) => {
    return (
        <div className='flex flex-row px-20 py-20 bg-gradient-to-r from-white'>
            <div>
                <p className='text-5xl font-Poppins py-5'>Here is what our clients<br /> are saying about us</p>
                <p className='text-2xl font-Poppins py-5'>{grade}</p>
                <p className='font-Mulish w-2/5 py-5'>{comment}</p>
                <p className='font-Poppins'>{clientName}</p>

            </div>
            <img src={propertyCommented} alt='property' className='-z-10' />
        </div>
    );
}

export default ReviewCard;