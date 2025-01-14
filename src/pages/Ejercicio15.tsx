/**
 * Mejora el ejercicio 12
 * Creando 2 componentes nuevos
 * 1 para el listado de usuarios
 * 1 para el formulario de añadir nuevos usuarios 
 */

import { ChangeEvent, FormEvent, useState } from "react"

const nombresDefault = ['Juan', 'Ana', 'Pablo']
function Ejercicio15() {
    const [nombres, setNombres] = useState(nombresDefault)
    const [nombre, setNombre] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!nombre) return
        setNombres([...nombres, nombre])
        setNombre('')
    }
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value)
    }
    const handleEliminarNombre = (index: number) => {
        const nuevaLista = nombres.filter((_, i) => i !== index)
        setNombres(nuevaLista)
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Nuevo nombre </label>
                <input value={nombre}
                    onChange={handleOnChange} />
                <button> Añadir</button>
            </form>
            <h1>Listado de nombres</h1>
            <div>
                {nombres.map((nombre, index) => <div key={index}>{nombre}
                    <button
                        className="text-red-500 bg-transparent"
                        onClick={() => handleEliminarNombre(index)}>
                        X</button>
                </div>)}
            </div>
        </>
    )
}
export default Ejercicio15
