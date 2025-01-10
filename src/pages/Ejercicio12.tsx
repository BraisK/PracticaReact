/**
 * Muestra por pantalla una lista de nombres(almacenado en un array)
 * Se podra mediante un formulario añadir nombres nuevos
 * Tambien se podra borrar algunos de esos nombres
 * 
 * Nuevo nombre [ '' ] Añadir
 * 
 * ana x
 * juan x
 * pedro x
 */

import { ChangeEvent, FormEvent, useState } from "react"

const nombresDefault = ['Juan', 'Ana', 'Pablo']
export default function Ejercicio12() {
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

