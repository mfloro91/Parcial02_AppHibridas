import React, { useState, useEffect } from 'react'
import { Card } from '../UiComponents.js'
import imgSpa from '../../assets/spa.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Services() {

    const [services, setServices] = useState([])
    const navigate = useNavigate();

    // Enpoint: GET SERVICES ALL

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token) {
            navigate("/");
            return;
        }
        if (role === "superadmin") {
            fetchServicesAll(token);
        } else {
            fetchServices(token);
        }

    }, []);


    const fetchServicesAll = async (token) => {
        try {
            const res = await axios.get("http://localhost:3000/services/all", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setServices(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    const fetchServices = async (token) => {
        try {
            const res = await axios.get("http://localhost:3000/services", {
                headers: { Authorization: `Bearer ${token}` }
            });

            setServices(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Servicios</h2>

            <div className="d-flex flex-wrap justify-content-center align-items-center mt-5">

                {services.map((service) => (
                    <Card
                        key={service._id}
                        title={service.title}
                        description={service.description}
                        cta="Ver más"
                        onClick={() => navigate(`/service/${service.id}`)}

                    >
                        <img src={imgSpa} alt="Imagen del servicio" style={{ width: "100%", borderRadius: "8px" }} />
                    </Card>


                ))}

            </div>

        </div>
    )
}

export default Services