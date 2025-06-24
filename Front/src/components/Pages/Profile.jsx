import React from 'react'

const Profile = () => {
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");
    const hotelName = localStorage.getItem("hotelName");

  return (
    <div>
        <h2>¡Hola {name}! </h2>
        <p>Tu rol es: {role}</p>
        <p>Actualmente te estás hospedando en el hotel: {hotelName} </p>
    </div>
  )
}

export default Profile