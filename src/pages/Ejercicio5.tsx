/**
 * Estamos usando mucho la clase boton, crea un componente Boton que nos 
 * permita reutilizarlo en toda nuestra aplicacion
 */

import Button from "../components/Button"


export default function Ejercicio5() {
  const handleClick = () => {
    alert('Hola')
  }
  return (
    <Button onClick={handleClick}> Pulsame </Button>
  )
}


