import React, { useState, useEffect } from 'react'
import { Card, Button } from '../../routes/UiComponents'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Hotels() {

    const [hotels, setHotels] = useState([])

    const navigate = useNavigate()
    const goCreateHotel = () => {
        navigate('/hotels/createhotel')
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || role !== "superadmin") {
            navigate("/");
            return;
        }

        fetchHotels(token);
    }, []);

    // Enpoint: GET HOTELS ALL
    const fetchHotels = async (token) => {
        try {
            const res = await axios.get("http://localhost:3000/hotels", {
                headers: { Authorization: `Bearer ${token}` }
            });

            setHotels(res.data);

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <h2>Hoteles</h2>
            <p>Estos son algunos de los hoteles que están usando nuestra app.</p>

            {hotels.map((hotel) => (
                <Card
                    key={hotel._id}
                    title={hotel.name}
                    description={`${hotel.city}, ${hotel.country}`}
                    cta="Ver más"
                    onClick={() => navigate(`/hotels/${hotel._id}`)}
                />
            ))}

            <Button text="Crear nuevo hotel" variant="success" onClick={goCreateHotel}> </Button>

        </div>
    )
}

export default Hotels