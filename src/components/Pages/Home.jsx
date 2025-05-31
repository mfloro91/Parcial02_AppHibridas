import React from 'react'
import { Card, Hotel } from '../UiComponents.js'
import imgSpa from '../../assets/spa.jpg'

function Home() {
    return (
        <div>
            <h2>Home</h2>

            <Hotel hotel="Guajira" description="Vení a la Guajira, diversión y descanso." />

            <Card
                title="Spa"
                description="Vení a hacerte masajes o a usar el sauna seco."
                image={imgSpa}
                cta="Reservar"
            />

        </div>
    )
}

export default Home