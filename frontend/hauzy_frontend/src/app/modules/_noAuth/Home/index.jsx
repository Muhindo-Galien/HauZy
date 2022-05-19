import React from 'react';
import ClientsReview from './_modules_/ClientsReview';
import Footer from './_modules_/Footer';
import LatestProperties from './_modules_/LatestProperty';
import PresentationContainer from './_modules_/PresentationContainer';

const HomePage = () => {
    return (
        <div>
            <PresentationContainer />
            <LatestProperties />
            <ClientsReview />
            <Footer/>
        </div>
    );
};

export default HomePage;
