import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imgSpa from './assets/spa.jpg'
import Button from './components/Button'
import Text from './components/Text'
import Card from './components/Card'
import Nav from './components/Nav'
import Hotel from './components/Hotel'
import Form from './components/Form'

function App() {
  

  return (
    <>

      <div>
        <Nav />
      </div>
      
      <Hotel hotel="Guajira" description="Vení a la Guajira, diversión y descanso." />

      <Card
        title="Spa"
        description="Vení a hacerte masajes o a usar el sauna seco."
        image={imgSpa}
        cta="Reservar"
      />

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
