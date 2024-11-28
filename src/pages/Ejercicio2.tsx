/**
 * Crea un componente que reciba 2 valores numeros
 * El componenete tambien recibe una funcion al ejecutarse
 * Ej 
 * function suma(n1+n2){
 * return n1+n2
 * }
 * 
 * El componente tendra que mostrar el resultado de ejecutar la operacion con estos 2 numeros
 */

interface Props{
  a:number
  b:number
  operacion: (x:number, b:number) => number
}
function Calculador({a, b, operacion}: Props){
  return operacion(a,b)
}


export default function Ejercicio2() {
  const suma = (a:number,b:number) => a+b
  return (
    <Calculador a={4} b={5} operacion={suma}/>
  )
}
