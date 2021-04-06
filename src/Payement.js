import React, { useEffect, useState } from 'react'
import './Payement.css'
import { getTotalPrice } from './reducer';
import ShoppingItem from './ShoppingItem';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { db } from './firebase';

function Payement() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();   

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (user) { db.collection('users')
            .doc(user?.uid)
            .collection('basket')
            .add({
                basket : basket
            });
            dispatch({
                type : "INITIALIZE_BASKET"
            })
            history.replace('/orders');
        }else{
            history.push('/login')
        }

        }
    return (
        <div className="payement">
            <div className="payement__info">
                <h1>
                    Checkout <Link to="/checkout">({basket?.length} items)</Link></h1>
                <div className="adress">
                    <h2>Delivery Adress</h2>
                    <div className="info">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angelos, CA</p>
                    </div>
                </div>
            </div>
            <div className="payement__basket">
                <h2>Reviews items and delivery</h2>
                <div className="basket">
                {basket.map(item => (
                    <ShoppingItem
                    id = {item.id}
                    image= {item.imageUrl}
                    description= {item.description}
                    price={item.price}
                    rating={item.rating}/>
                ))}
                </div>
            </div>
            <div className="payement__method">
                <h2>Payement Method</h2>
                <form onSubmit={handleSubmit}>
                    <div className="card">
                        <h2> Subtotal ({basket.length} items) : $ {getTotalPrice(basket)}</h2>
                        <button><span>Buy now</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payement
