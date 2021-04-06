import React from 'react'
import './Checkout.css'
import ShoppingItem from './ShoppingItem';
import { useStateValue } from './StateProvider';
import {getTotalPrice} from './reducer';
import { useHistory } from 'react-router';
function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/08/amazonservices/seller_success_stories/2021/02_ops-corp/ops-careers-editorial-1x._CB659556174_.jpg" alt="" className="checkout__ad"/>
                <h1>Your Shopping Basket</h1>
                <hr/>
                {basket.map(item => (
                    <ShoppingItem
                    id = {item.id}
                    image= {item.imageUrl}
                    description= {item.description}
                    price={item.price}
                    rating={item.rating}/>
                ))}
            </div>
            <div className="checkout__right">
                <div className="chekcout__subtotal">
                    <p>Subtotal ({basket.length} items) : </p>
                    <strong> {getTotalPrice(basket)}</strong>
                </div>
                <div className="checkout__gift">
                    <input type="checkbox" disabled />
                    <p>this order contains a gift</p>
                </div>
                <button onClick={e => history.push('/payement')}>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Checkout;
