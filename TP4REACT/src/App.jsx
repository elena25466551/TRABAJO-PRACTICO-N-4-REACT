import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
//impotar todo los elementos de react
import React from 'react'
import Hijo from './Components/Hijo'
//consumir los elementos de la pagina
function App() {
  const [data, setData] = useState([])

  async function ConsumirAPI()
  {
    const response = await fetch( 'https://api.disneyapi.dev/characters');
    const respuesta = await response.json()
    
    setData(respuesta.data)
  }

  

//ejecuta lo que esta adentro de las llaves cuando renderizo la pagina
// React.useEffect(() =>
// {
//   ConsumirAPI()
// },[])
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/*HAGO PETICION Y CARGO LA LISTA*/}
        <button onClick={() => ConsumirAPI()}>
          ENVIAR
        </button>
{/*RECORRO EL ARRAY*/ }
        {
          data.map((item, i) => {
            return (
              <p key={i}>{item.name}</p>
            )
          
          })
        }
        {
          console.log(data.splice(0, 1))
                    
         }


        <Hijo></Hijo>

        <p>...</p>
      </div>
    </div>
  )
}

export default App
