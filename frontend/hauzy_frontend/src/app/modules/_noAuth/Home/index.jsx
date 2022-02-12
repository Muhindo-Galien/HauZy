import React from 'react';
import ClientsReview from './_modules_/ClientsReview';
import LatestProperty from './_modules_/LatestProperty';
import PresentationContainer from './_modules_/PresentationContainer';

const HomePage = () => {
    return (
        <div>
            <PresentationContainer />
            <LatestProperty />
            <ClientsReview/>
        </div>
    );
};

export default HomePage;
