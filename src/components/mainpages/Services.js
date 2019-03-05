import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import FullpageButton from '../../features/fullpage-button';
import weddingPic from '../../pics/general/majorpics/wedding.jpg';
import eventPic from '../../pics/general/majorpics/event.jpg';
import '../../styles/Services.css';


const Services =( ) => {
    return (
        <div>
            <Header />
            <div className="service-container">
                <FullpageButton href="/services/WeddingService" borderRight="borderRight" Title="Weddings" pic={weddingPic} />
                <FullpageButton href="/Services/EventService" Title="Events" pic={eventPic} />
            </div>
            <Footer />
        </div>
    )
}


export default Services;