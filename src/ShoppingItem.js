import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './ShoppingItem.css'
import { useStateValue } from './StateProvider';

function ShoppingItem({id, image, description, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id,
        })
    };
    return (
        <div className="shoppingItem">
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
                <button onClick={removeFromBasket} className="item__button">Remove from basket</button>
            </div>
        </div>
    )
}

export default ShoppingItem
