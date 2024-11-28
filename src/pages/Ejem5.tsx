const Saludador = () => <p>Hola</p>
interface Props {
  nombre: string
  valor: number
  activo: boolean
  hobbies: string[]
  dato: JSX.Element
  MiComponente: React.ReactNode
  miFuncion: (valor: number) => number
}

function ComponenteConProps({ nombre, valor, activo, hobbies, dato, MiComponente, miFuncion }: Props) {
  return (
    <>
      <div>Hola {nombre}</div>
      <div>El valor es: {valor}</div>
      <div>Está activo? {activo ? 'SI' : 'NO'}</div>
      <div>Sus jobies: {hobbies.join(',')}</div>
      <div>{dato}</div>
      <div>{MiComponente}</div>
      <div>{miFuncion(6)}</div>
    </>
  )
}

export default function Ejem5() {
  return (
    <ComponenteConProps
      nombre='Ana'
      valor={6}
      activo={false}
      hobbies={['Cantar', 'bailar']}
      dato={<p>Hola</p>}
      MiComponente={<Saludador />}
      miFuncion={(v) => v+1}
    />

  )
}
