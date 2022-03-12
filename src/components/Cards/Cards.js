import React from 'react'
import SingleCard from '../SingleCard/SingleCard'
import './Cards.css'

let CITIES = [
    {
        id: 1001,
        name: "Lonavala",
        distance: 66,
        imgSrc: 'https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_q=highq&im_w=720',
        bgColor: '#de3151'
    },
    {
        id: 1002,
        name: "Calangute",
        distance: 396,
        imgSrc: 'https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_q=highq&im_w=720',
        bgColor: '#d93b30'
    },
    {
        id: 1003,
        name: "Alibaug",
        distance: 36,
        imgSrc: 'https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_q=highq&im_w=720',
        bgColor: '#cc2d4a'
    },
    {
        id: 1004,
        name: "Karjat",
        distance: 53,
        imgSrc: 'https://a0.muscache.com/im/pictures/987777cc-4ef6-4db7-93fe-b40770abd75d.jpg?im_q=highq&im_w=720',
        bgColor: '#bc1a6e'
    },
    {
        id: 1005,
        name: "Matheran",
        distance: 86,
        imgSrc: 'https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_q=highq&im_w=720',
        bgColor: '#de3151'
    },
    {
        id: 1006,
        name: "Murud",
        distance: 106,
        imgSrc: 'https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_q=highq&im_w=720',
        bgColor: '#d93b30'
    }
]

export default function Cards() {
    return (
        <div className="all-cards">
            {
                CITIES.map((city) => (
                    <SingleCard city={city} />
                ))
            }
        </div>
    )
}
