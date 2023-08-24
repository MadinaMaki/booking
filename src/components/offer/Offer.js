import React from "react";
import './Offer.css';

function Offer(props) {
    return(
        <div className="offer">
            <h3 {...props}>{props.title}</h3>
            <p>View all</p>
        </div>
    )
}

export default Offer;