import React from 'react';
import star from '../images/star.png';

const Cards = (props) => {
    let badgeText;
    if (props.openSpots === 0 ) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='cards' >
                <img src={`./images/${props.coverImg}`} alt="" />
                {badgeText && <span className='badge-text' >{badgeText}</span>}
                <div className='rating' >
                    <img src={star} alt="rating" />
                    <span className='rating-num' >{props.stats.rating.toFixed(1)}</span>
                    <span className='grey-span'>({props.stats.reviewCount}) • {props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Cards;