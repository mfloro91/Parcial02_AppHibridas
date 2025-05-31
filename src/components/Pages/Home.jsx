import React from 'react'
import { Card, Hotel } from '../UiComponents.js'

function Home() {
    return (
        <div>

            <Hotel hotel="Guajira" description="Vení a la Guajira, diversión y descanso." />

            <div class="d-flex flex-wrap justify-content-center align-items-center mt-5"> 

                <Card
                    title="Servicios"
                    description="Conocer todo lo que puedo hacer en mi estadía."
                    cta="Ver más"
                />

                <Card
                    title="Mi estadía"
                    description="Conocer los detalles de mi estadía."
                    cta="Login"
                />

            </div>

        </div>
    )
}

export default Home