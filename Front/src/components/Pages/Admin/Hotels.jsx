import React, { useState, useEffect } from 'react'
import Card from '../../UI/Card.jsx'
import Button from '../../UI/Button.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Hotels() {

    const navigate = useNavigate()
    const goCreateHotel = () => {
        navigate('/createhotel')
    }

    const [hotels, setHotels] = useState([])

    // Enpoint: GET HOTELS ALL
    const fetchHotels = async () => {
        try {
            const res = await axios.get("http://localhost:3000/hotels")
            setHotels(res.data)

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchHotels()
    }, [])


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
                    onClick={() => navigate(`/hotel/${hotel.id}`)}
                />
            ))}

            <Button text="Crear nuevo hotel" variant="success" onClick={goCreateHotel}> </Button>

        </div>
    )
}

export default Hotels