import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <h2>Iniciar sesión</h2>
        <Link to="/profile/12345"> Ir a mi perfil </Link>
    </div>
  )
}

export default Login