import React, { useState, useEffect } from 'react'
import { Card } from '../../routes/UiComponents'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Orders() {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || !["superadmin", "admin", "staff"].includes(role)) {
            navigate("/");
            return;
        }


        fetchOrders(token, role);
    }, []);

    // Enpoint: GET ALL ORDERS

    const fetchOrders = async (token, role) => {
        try {
            const endpoint = role === "superadmin" ? "/orders/all" : "/orders";
            const res = await axios.get(`http://localhost:3000${endpoint}`, {
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

            <div className="d-flex flex-wrap justify-content-center align-items-center mt-3">
                {orders.map((order) => (
                    <Card
                        key={order._id}
                        title={order.service_id?.title || "Servicio desconocido"}
                        description={order.status}
                        cta="Ver más"
                        onClick={() => navigate(`/order/${order._id}`)}
                    />
                ))}
            </div>

        </div>
    )
}

export default Orders