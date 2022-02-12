import React,{useEffect} from 'react';
import { useHome } from '../../../../context/HomeContext';
import PropertyCard from '../../../PropertyCard';
import property_image from '../../../../../static/images/property_image.jpeg';
import PropertyPrsentation from './Presentation';

const LatestProperty = () => {
    const { onFetchProperties, isLoading, properties } = useHome();
    
    useEffect(() => {
        if (!properties.length) {
            onFetchProperties();
        }
    }, [onFetchProperties, properties.length]);

    console.log(properties);
    
    return (
        <div>
            <PropertyPrsentation/>
            <div className='grid grid-cols-3 gap-10 justify-center mt-7 ml-32 mr-32 pb-10'>
                {
                    !isLoading && properties.map((property) => {
                        return (
                            <PropertyCard
                                image_url={property_image}
                                price={property.price}
                                state={property.state}
                                city={property.city}
                                adress={property.address}
                                status={property.status}
                                type={property.type}
                                key={property._id}
                            />
                        )
                    })
                }

            </div>
        </div>
    );
}

export default LatestProperty;