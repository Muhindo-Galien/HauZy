import React, { useEffect } from "react";
import { useHome } from "../../../../context/HomeContext";
import PropertyCard from "../../../PropertyCard";
import property_image from "../../../../../static/images/property_image.jpeg";
import PropertyPresentation from "./Presentation";
import PropertySkeleton from "../../../PropertySkeleton";

const LatestProperties = () => {
  const { onFetchProperties, isLoading, properties } = useHome();

  useEffect(() => {
    if (!properties.length) {
      onFetchProperties();
    }
  }, [onFetchProperties, properties.length]);

  return (
    <div>
      <PropertyPresentation />
      <div
        className="grid grid-cols-3 gap-10
                        justify-center mt-7 mx-32
                        lg:mx-28 md:mx-10 pb-10 xsm:flex
                         xsm:flex-col sm:flex sm:flex-col xsm:mx-5 sm:mx-5 xsm:pb5 sm:pb-5"
      >
        {!isLoading ? (
          properties.map((property) => {
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
            );
          })
        ) : (
          <PropertySkeleton count={3} />
        )}
      </div>
    </div>
  );
};

export default LatestProperties;
