import { useState } from "react"

export default function Ejem11() {
  //let contador=0
  const[contador , setContador] = useState(0)

  const titulo='El estado de React'
  const [pulsado, setPulsado] = useState(false)
  //let isPressed = false

  function handleClick() {
    //isPressed = !isPressed
    setPulsado( !pulsado )
    setContador(contador+1)
  }

  return (
    <>
    <h1>{titulo}</h1>
    <button className='m-5' onClick={handleClick}>
      {pulsado ? 'Esta pulado' : 'No esta pulsado'}
    </button>
    {contador}
    </>
  )
}
