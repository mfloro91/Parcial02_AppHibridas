import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import {Home, Services, Contact, Login, NotFound, Profile, Register, Hotels, Users, Orders, PanelAdmin, CreateHotel} from './index.js';
import {Button, Text, Card, Navbar, Hotel} from './components/UiComponents.js';

function App() {


  return (
    <>


      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/paneladmin" element={<PanelAdmin/>} />
        <Route path="/createhotel" element={<CreateHotel/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes >


    </>
  )
}

export default App

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Text> 
      <p>Hola cómo estas?</p>  
      <p>Yo estoy re bien</p>  
      </Text>
      <Button texto="Aceptar" variant="success">  </Button>
      <Button texto="Cancelar" variant="warning">  </Button>

      <Card
        title="Spa"
        description="Vení a hacerte masajes o a usar el sauna seco."
        image={imgSpa}
        cta="Reservar"
      />
    </>
  )
}

*/
