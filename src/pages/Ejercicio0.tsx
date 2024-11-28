/*
Crea un componente que se le pase como prop un valor en grados Centigrados
y muestre ese valor en grados Farenheit
*/
interface Props{
  grados:number
}

function Conversor({grados}:Props){
  const farenheit = 1.8* grados + 32
  return (
    <div>{farenheit} Fº</div>
  )
}

export default function Ejercicio0() {
  return <Conversor grados={30}/>
}
