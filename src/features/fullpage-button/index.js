import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';


const FullpageButton = (props) => {
    return (
    <Link to={props.href}>
        <div className={`image-container ${props.borderRight}`}>
            <div className="onHover">
                <h2 className="onHoverTitle">{props.Title}</h2>
            </div>
            <img className="service-pic" src={props.pic} alt="wedding celebration"></img>
        </div>
    </Link>
    )
}

export default FullpageButton;