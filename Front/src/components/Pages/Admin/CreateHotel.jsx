import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormHotel from '../../UI/FormHotel'
import { Button } from '../../routes/UiComponents'

// CreateHotel trae el formHotel el cual hace una petición POST para crear un nuevo hotel

function CreateHotel() {

  const navigate = useNavigate()
  const goToHotels = () => {
    navigate('/hotels')
  }

  return (
    <div>
      <h2>Crear un nuevo hotel</h2>
      <FormHotel />
      <Button text="Volver a hoteles" variant="success" onClick={goToHotels}>  </Button>

    </div>
  )
}

export default CreateHotel