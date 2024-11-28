/**
 * Crea un componente que muestre un texto y un boton
 * Cuando se pulse el boton el texto desaparecerá
 * So le vuelve a pulsar el boton el texto aparecerá
 * y asi continuamente a modo de toggle
 */

import { useState } from "react"

export default function Ejercicio3() {
  const [isVisible, setIsVisible]  = useState(true)
  const texto='Estoy aqui'
  
  const handleClick = () =>  setIsVisible(!isVisible)

  
  return (
    <>
      {isVisible && <p>{texto}</p>}
      <button onClick={handleClick}>
        {isVisible ? 'Toca para desaparecer' : 'Toca para aparecer'}
      </button>
    </>
  )
}
