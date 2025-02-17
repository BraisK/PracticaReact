/**
 * Crea un formulario que permita guardar un POST en una base de datos.
 * Para ello usaremos el simulador de API's jsonplaceholder, q  ue nos permite
 * hacer peticiones HTTP  a una url simulando el comportamiento de una API. 
 * 
 * los datos a guardar: 
 *  - title tipo string
 *  - body de tipo string
 *  - userId de tipo number´
 * 
 * Hay que lanzar una petición por POST a https://jsonplaceholder.typicode.com/posts
 * pasando por el body los datos del formulario. 
 */

import React, { ChangeEvent, FormEvent, useState } from 'react'
import CircularSpinner from '../components/CircularSpinner'


export default function Ejercicio8() {
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    })

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSumit = async (e: FormEvent) => {
        e.preventDefault()
        console.log(formData)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                /*  body: JSON.stringify({
                    title: formData.title,
                    body: formData.body,
                    userId: 100,
                }),*/

                body: JSON.stringify({ ...formData, userId: 100, }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            })

            if (!response.ok) throw new Error()
            const data = await response.json()
            console.log('Formulario enviado sin errores: ', data)
            setError('')
        } catch (e) {
            console.error('formulario con errores')
            //if (e instanceof Error) setError(e.message)
            //else setError('Error al enviar')
            setError(e instanceof Error ? e.message : 'Error al enviar')

        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value, })
    }

    return (
        <form onSubmit={handleSumit}>
            <label htmlFor="">Title</label>
            <input name='title' id='title' value={formData.title} type="text" onChange={handleChange} />

            <label htmlFor="">Body: </label>
            <input name='body' id='body' value={formData.body} type="text" onChange={handleChange} />

            <button className='flex gap-3 items-center' type='submit' disabled={loading}>
                Enviar
                {loading && <CircularSpinner />}
            </button>
            {error && <div className='text-red-600'>{error}</div>}

        </form>
    )

}
