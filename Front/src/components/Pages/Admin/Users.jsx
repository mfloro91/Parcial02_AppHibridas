import React, { useState, useEffect } from 'react'
import {Card} from '../../UiComponents'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "superadmin") {
            navigate("/"); 
            return;
        }

        fetchUsers(token);
    }, []);


    // Endpoint: GET ALL USERS con autenticación
    const fetchUsers = async (token) => {
        try {
            const res = await axios.get("http://localhost:3000/users", {
                headers: { Authorization: `Bearer ${token}` }
            });

            setUsers(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Usuarios</h2>
            <p>Estos son los usuarios que tienen cuenta en la app.</p>

            {users.map((user) => (
                <Card
                    key={user._id}
                    title={user.name}
                    description={user.email}
                    cta="Ver más"
                    onClick={() => navigate(`/users/${user._id}`)}
                />
            ))}

        </div>
    )
}

export default Users