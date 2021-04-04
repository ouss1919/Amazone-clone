import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({id, description, price, rating, imageUrl}) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type : "ADD_TO_BASKET",
            item : {
                id : id,
                description : description,
                price : price,
                rating :  rating,
                imageUrl :imageUrl
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="decription"> {description}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rate">
                    {Array(rating).fill().map((_, i) => (<StarIcon className = "starIcon"/>))}
                </div>
            </div>
            <div className="product__buy">
                <img src={imageUrl} alt=""/>
                <button onClick={addToBasket}>Add to basket</button>
            </div>
        </div>
    )
}

export default Product
