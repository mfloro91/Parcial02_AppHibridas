import React from 'react'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'

function Hotels() {

    const navigate = useNavigate()
    const goCreateHotel = () => {
        navigate('/createhotel')
    }

    return (
        <div>
            <h2>Hoteles</h2>
            <p>En esta sección podrás ver los hoteles disponibles. Agregar un get con cards</p>

            <Button text="Crear nuevo hotel" variant="success" onClick={goCreateHotel}> </Button>

        </div>
    )
}

export default Hotels