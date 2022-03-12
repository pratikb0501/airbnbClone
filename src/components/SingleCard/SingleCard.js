import React from 'react';
import './SingleCard.css'

export default function SingleCard(props) {
    return (
        <div className='main-div cur-ptr'>
            <div className='img-div'>
                <img src={props.city.imgSrc} alt="card-mages" />
            </div>
            <div className='div-description' style={{
                "backgroundColor": `${props.city.bgColor}`
            }}>
                <p className='city-name'>{props.city.name}</p>
                <p className='city-distance'>{props.city.distance} kilometers away</p>
            </div>
        </div>
    )
}
