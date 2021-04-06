import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Order.css'

function Order({id, image, description, price, rating}) {

    return (
        <div className="order">
            <img src={image} alt="" className="itemImage"/>
            <div className="item__description">
                <h3>{description}</h3>
                <div className="item__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="item__rating">
                    {Array(rating).fill().map((_, i) =>(<StarIcon className = "starIcon"/>))}
                </div>
            </div>
        </div>
    )
}

export default Order
