import { useEffect, useState } from "react"

export default function Ejem17() {
  const [segundo, setSegundo] = useState(0)

  useEffect( () =>{
      const intervalo = setInterval( () =>setSegundo(prev => prev+1), 1000)

      return () =>{
        console.log('Se ejecuta solo cuando se desmonte el componente')
        clearInterval(intervalo)
      }


  },[])

  return (
    <div>Segundo :{segundo}</div>
  )
}
