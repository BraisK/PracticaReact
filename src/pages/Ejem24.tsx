import  { useState } from 'react'

function useCounter(initialValue=0  ){
  const [cont, setCont] = useState(initialValue)
  
  const incrementar = () =>  setCont(cont+1)
  const decrementar = () => setCont(cont-1)
  const resetear = () =>  setCont(initialValue)

  return{   cont, incrementar, decrementar, resetear  }
}

export default function Ejem24() {
  const {cont,incrementar,decrementar,resetear:reset}= useCounter(5)

  return (
    <div className='flex flex-col'>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
      {cont}
    </div>
  )
}