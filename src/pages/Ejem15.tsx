const nombres= ['Juan', 'Antonio', 'Rosa', 'Paula','Juan']

export default function Ejem15() {
  return (
    <>
    <ul>
      {nombres.map(nombre => <li key={nombre}>{nombre}</li>)}
    </ul>
    <ul>
      {nombres.map((nombre,index) => <li key={index}>{nombre}</li>)}
    </ul>
    </>
  )
}
