import React from 'react'
import { Card, Hotel } from '../UiComponents.js'
import imgSpa from '../../assets/spa.jpg'

function Services() {
    return (
        <div>
            <h2>Servicios</h2>

            <div class="d-flex flex-wrap justify-content-center align-items-center mt-5">

                <Card
                    title="Spa"
                    description="Vení a masajearte."
                    cta="Reservar"
                >
                    <img src={imgSpa} alt="Spa" />
                </Card>

                <Card
                    title="Bar"
                    description="Reservá tu mesa."
                    cta="Reservar"
                >
                    <img src={imgSpa} alt="Spa" />
                </Card>

            </div>

        </div>
    )
}

export default Services