import React, { useState, useEffect } from 'react'
import Card from '../../UI/Card.jsx'
import Button from '../../UI/Button.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Orders() {
    const [orders, setOrders] = useState([])

    // Enpoint: GET ALL ORDERS

    const fetchOrders = async () => {
        try {
            const res = await axios.get("http://localhost:3000/orders")
            setOrders(res.data)

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])


    return (
        <div>
            <h2>Pedidos y reservas</h2>
            <p>Estos son los pedidos y reservas que hicieron los huéspedes.</p>

            {orders.map((order) => (
                <Card
                    key={order._id}
                    title={order.name}
                    description={order.status}
                    cta="Ver más"
                    onClick={() => navigate(`/order/${order.id}`)}
                />
            ))}

        </div>
    )
}

export default Orders