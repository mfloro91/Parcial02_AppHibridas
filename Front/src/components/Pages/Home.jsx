import React from 'react'
import { Card, Hotel } from '../UiComponents.js'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()
    const goToServices = () => {
        navigate('/services')
    }
    const goToLogin = () => {
        navigate('/login')  
    }

    return (
        <div>

            <Hotel hotel="Guajira" description="Vení a la Guajira, diversión y descanso." />

            <div className="d-flex flex-wrap justify-content-center align-items-center mt-5">

                <Card
                    title="Servicios"
                    description="Conocer todo lo que puedo hacer en mi estadía."
                    cta="Ver más"
                    onClick={goToServices}
                />

                <Card
                    title="Mi estadía"
                    description="Conocer los detalles de mi estadía."
                    cta="Login"
                    onClick={goToLogin}
                />

            </div>

        </div>
    )
}

export default Home