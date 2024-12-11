/**
 * Crea un formulario que permita guardar un posten una base de datos
 * Pare ello usaresmos el simulador de api's jsonplaceholder, que nos permite hacer
 * peticiones HTTP a una url simulando el comportamiento de una api
 * 
 * 
 * los datos a guardar son:
 * - title de tipo string
 * - body de tipo string
 * - userIdde tipo number
 * 
 * 
 * Hay que lanzar una peticion por POST a https://jsonplaceholder.typicode.com/posts
 * pasando por el body los datos del formulario
 */

export default function Ejercicio8() {
  return (
    <>
      <section>
        <label htmlFor="">Title:  <input type="text" name="title" id="title" /></label>
        <label htmlFor="">Title:  <input type="text" name="title" id="title" /></label>
      </section>
    </>
  )
}
