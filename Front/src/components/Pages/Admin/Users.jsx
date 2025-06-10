import React, { useState, useEffect } from 'react'
import {Card, Button} from '../../UiComponents'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])

    // Enpoint: GET ALL USERS 
    const fetchUsers = async () => {
        try {
            const res = await axios.get("http://localhost:3000/users/all")
            setUsers(res.data)

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <div>
            <h2>Usuarios</h2>
            <p>Estos son los usuarios que tienen cuenta en la app.</p>

            {users.map((user) => (
                <Card
                    key={user._id}
                    title={user.name}
                    description={user.status}
                    cta="Ver más"
                    onClick={() => navigate(`/user/${user.id}`)}
                />
            ))}

        </div>
    )
}

export default Users