import React, { FormEvent, useRef } from 'react'

function Ejem28() {
    const nombre = useRef<HTMLInputElement>(null)
    const apellido = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Nombre: ',nombre?.current?.value)
        console.log('Apellido: ',apellido?.current?.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nombre:</label>
                <input ref={nombre}/>
            </div>
            <div>
                <label htmlFor="">Apellido:</label>
                <input ref={apellido} />
            </div>
            <button>Enviar</button>
        </form>
    )
}

export default Ejem28