import React from 'react';

import '../styles/PageSnippets.css';
import { Link } from 'react-router-dom';

const PageSnippets = (props) => {
    return (
        <Link to={props.href}>
        <div id={props.snipid} className="snippet-container">
            <div id={props.hoverid} className="onHover">
                 <h2 className="onHoverTitle">{props.title}</h2>
            </div>
            <img className="snippet-image" src={props.image} alt={props.title}/>
        </div>
        </Link>
    )

}



export default PageSnippets;