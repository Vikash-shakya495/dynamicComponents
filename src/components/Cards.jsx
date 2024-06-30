import React from 'react'
import './Cards.css'

const Cards = ({data}) => {
    return(
                data.map((item, index)=>(
                    <div className='card' key={index}>
                        <div className='image_container'>
                        <img className='card_img' src={item.img} alt={item.name} />

                        </div>
                        <h1>Card {index+1}</h1>
                        <p>This card {index+1} is describing {item.name}</p>
                    </div>
                )
            )

    )
}

export default Cards;