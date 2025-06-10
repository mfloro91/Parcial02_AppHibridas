import React, { useState, useEffect } from 'react'
import { Card } from '../UiComponents.js'
import imgSpa from '../../assets/spa.jpg'
import axios from 'axios'

function Services() {

    const [services, setServices] = useState([])

    // Enpoint: GET SERVICES (FILTRO AUTOMATICO) 
    // Falta agregar el endpoint GET SERVICES ALL - vista condicional segun token

    const fetchServices = async () => {
        try {
            const res = await axios.get("http://localhost:3000/services")
            setServices(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchServices()
    }, [])

    return (
        <div>
            <h2>Servicios</h2>

            <div class="d-flex flex-wrap justify-content-center align-items-center mt-5">

                {services.map((service) => (
                    <Card
                        key={service._id}
                        title={service.name}
                        description={service.description}
                        cta="Ver más"
                        onClick={() => navigate(`/service/${service.id}`)}
                    />
                ))}

            </div>

        </div>
    )
}

export default Services