import React from 'react';
import { BiBed,BiBath,BiRectangle } from 'react-icons/bi';

const PropertyCard = ({
  image_url,
  price,
  state,
  city,
  adress,
  status,
  type,
}) => {
  return (
    <div className='shadow-2xl w-fit rounded-xl'>
      <img src={image_url} alt='card' className='rounded-t-xl' />
      <div className='px-5 py-5 md:px-2 text-slate-700'>
        <p className='font-Poppins'>{price} USD</p>
        <p className='font-Mulish text-sm flex flex-cols items-center'>
          {state},{city},{adress}
        </p>
        <p className='font-Poppins text-sm text-green-600'>{status}</p>
      </div>
      <div className='border-b border-slate-400'></div>
      <div className='flex flex-row justify-around text-slate-700 py-5'>
        <p>
          <span className='flex flex-row items-center font-Poppins'><BiBed className='mr-2' /> 3</span>
          <span className='text-xs font-Mulish'>Bedrooms</span>
        </p>
        <p>
          <span className='flex flex-row items-center font-Poppins'><BiBath className='mr-2' /> 3</span>
          <span className='text-xs font-Mulish'>Bathrooms</span>
        </p>
        <p>
          <span className='flex flex-row items-center font-Poppins'><BiRectangle className='mr-2' /> 30&#13217;</span>
          <span className='text-xs font-Mulish'>Living area</span>
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;