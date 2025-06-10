import React from 'react'
import FormHotel from '../../UI/FormHotel'

// CreateHotel trae el formHotel el cual hace una petición POST para crear un nuevo hotel

function CreateHotel() {
  return (
    <div>
        <h2>Crear un nuevo hotel</h2>
        <FormHotel/>

    </div>
  )
}

export default CreateHotel