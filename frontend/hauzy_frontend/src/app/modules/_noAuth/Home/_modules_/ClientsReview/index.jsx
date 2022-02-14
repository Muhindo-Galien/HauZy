import React from 'react';
import ReviewCard from './ReviewCard';
import clientsReviews from './DummyData/index';

const ClientsReview = () => {
  return (
    <div className='shadow-xl my-20 lg:my-14 mx-32 lg:mx-28 md:mx-10 xsm:mx-5 sm:mx-5'>
        {
          clientsReviews.map((clientReview) => {
            return (
              <ReviewCard
                comment={clientReview.comment}
                clientName={clientReview.clientName}
                grade={clientReview.grade}
                propertyCommented={clientReview.propertyCommented}
              />
            )
          })
        }
      </div>
  );
};

export default ClientsReview;