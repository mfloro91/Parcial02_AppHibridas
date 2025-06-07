import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const {id} = useParams();

  return (
    <div>
        <h2>¡Hola {id}! </h2>
    </div>
  )
}

export default Profile