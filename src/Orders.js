import React, { useEffect, useState } from 'react'
import './Orders.css'
import { db} from './firebase'
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [{ user} , dispatch] = useStateValue();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        if (user){
        db.collection('users')
        .doc(user?.uid)
        .collection('basket')
        .onSnapshot(snapshot => {
            setOrders(snapshot.docs.map(doc => ({
                id : doc.id,
                data : doc.data()
            })))
        })
        }else{
            setOrders([])
        }
    }, [user])
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__list">
                {       orders.map(order => (
                        order.data.basket?.map(basket => (
                        <Order
                        id = {basket.id}
                        image= {basket.imageUrl}
                        description= {basket.description}
                        price={basket.price}
                        rating={basket.rating}/>
                    ))
                ))}
            </div>
        </div>
    )
}

export default Orders
