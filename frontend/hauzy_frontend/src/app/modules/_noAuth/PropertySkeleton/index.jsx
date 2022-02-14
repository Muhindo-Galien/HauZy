import React from 'react';

const PropertySkeleton = ({ count }) => {
    const countArray = Array.from(Array(count).keys());
    return (
            countArray.map((index) => {
                return (
                    <div key={index} className='shadow-2xl w-fit rounded-xl'>
                        <p className='w-[27rem] h-[16rem] bg-slate-300  animate-pulse rounded-t-xl' />
                        <div className='px-5 py-5 text-slate-700 w-[15rem]'>
                            <p className='bg-slate-300 h-4 animate-pulse' />
                            <p className=' flex flex-cols items-center bg-slate-300 h-4 mt-2 animate-pulse' />
                            <p className='text-green-600 bg-slate-300 h-4 mt-2 animate-pulse' />
                        </div>
                        <div className='border-b border-slate-400 mx-5'></div>
                        <div className='flex flex-row justify-around py-5 w-[27rem]'>
                            <p className='w-[5rem]'>
                                <span className='flex flex-row items-center bg-slate-300 h-4 animate-pulse w-[5rem]' />
                                <span className='flex flex-row items-center bg-slate-300 h-4 animate-pulse w-[6rem] mt-2' />
                            </p>
                            <p className='w-[5rem]'>
                                <span className='flex flex-row items-center bg-slate-300 h-4 animate-pulse w-[5rem]' />
                                <span className='flex flex-row items-center bg-slate-300 h-4 animate-pulse w-[6rem] mt-2' />
                            </p>
                            <p className='w-[5rem]'>
                                <span className='flex flex-row items-center bg-slate-300 h-4 animate-pulse w-[5rem]' />
                                <span className='flex flex-row items-center bg-slate-300 h-4 animate-pulse w-[6rem] mt-2' />
                            </p>
                        </div>
                    </div >
                );
            })
        );
}

export default PropertySkeleton;