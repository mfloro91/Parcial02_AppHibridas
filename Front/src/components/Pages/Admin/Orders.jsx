import React, { useState, useEffect } from 'react'
import { Card } from '../../UiComponents'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Orders() {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "superadmin") {
            navigate("/");
            return;
        }

        fetchOrders(token);
    }, []);

    // Enpoint: GET ALL ORDERS

    const fetchOrders = async (token) => {
        try {
            const res = await axios.get("http://localhost:3000/orders/all", {
                headers: { Authorization: `Bearer ${token}` }
            }); 

            setOrders(res.data);

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <h2>Pedidos y reservas</h2>
            <p>Estos son los pedidos y reservas que hicieron los huéspedes.</p>

            {orders.map((order) => (
                <Card
                    key={order._id}
                    title={order._service_id}
                    description={order.status}
                    cta="Ver más"
                    onClick={() => navigate(`/order/${order._id}`)}
                />
            ))}

        </div>
    )
}

export default Orders