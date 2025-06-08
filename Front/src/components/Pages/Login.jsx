import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../UI/Form'

function Login() {
  return (
    <div>
        <h2>Iniciar sesión</h2>
        <Form/>
        <Link to="/register"> Crear cuenta nueva </Link>
    </div>
  )
}

export default Login