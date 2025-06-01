import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../UI/Form'

function Login() {
  return (
    <div>
        <h2>Iniciar sesión</h2>
        <Form/>
        <Link to="/profile/12345"> Ir a mi perfil </Link>
    </div>
  )
}

export default Login