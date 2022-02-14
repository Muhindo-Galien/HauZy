import React from 'react';
import NavBar from './NavBar';
import Presentation from './Presentation';
import hauzy_landing_page_image from '../../../../../static/images/hauzi_landing_page_Image.png';
import useResponsive from '../../../../hooks/useResponsive';

const PresentationContainer = () => {
    const [isMobile] = useResponsive();

    return (
        <div>
            <div className='grid grid-cols-2 bg-black justify-between xsm:block sm:block'>
                <div className='bg-black text-white pb-20 md:pb-10 xsm:pb-10 sm:pb-10'>
                    <NavBar />
                    <Presentation />
                </div>
                {
                    !isMobile &&
                    <img src={hauzy_landing_page_image}
                        alt='landing_image'
                        className='rounded-l-full bg-gradient-to-br from-slate-200 w-auto h-full align-text-bottom'
                    />
                }
            </div>
        </div>
    );
}

export default PresentationContainer;