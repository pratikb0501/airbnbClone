import React from 'react'
import './Banner.css'

export default function Banner() {
    return (
        <div className="banner-main-div">
            <div className='banner-poster'>
                <img src='https://a0.muscache.com/im/pictures/644d9a47-e28c-4857-ad7b-2dc191cb3507.jpg?im_w=960' alt="poster" />
                <div className='img-content'>
                    <h2>Let your curiosity do the booking</h2>
                    <p><span>I'm flexible</span></p>
                </div>
            </div>
        </div >
    )
}
