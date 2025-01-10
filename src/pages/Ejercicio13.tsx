/* Maquina de café Haz una replica de la maquina de café de Cebem.

Tendremos botones para añadir dinero: 0.10, 0.20, 0.50, 1.00 y 2.00 €
Un boton para devolver todo el dinero insertado
Tendremos botones para aumentar o disminuir el nivel de azucar (de 0 a 5)
Tendremos botones para indicar el tipo de cafe: corto, largo, descafeinado,...
El precio de los cafés es de 0.70 €
Mostrar error si no se ha insertado el suficiente dinero.
Si todo va bien, se mostrará por pantalla el tipo de café consumido, su nivel de azucar y el cambio a devolver */

import { useState } from "react"

function Ejercicio13() {
    const [dinero, setDinero] = useState(0)
    const [azucar, setAzucar] = useState(0)
    const [cafe, setCafe] = useState('')
    const [comprar, setComprar] = useState('')
    const handleIngresar = (cant: number) => {
        setDinero(cant += dinero)
    }
    const devolver = () => {
        let total = dinero
        setDinero(total -= dinero)
    }
    const handleAddAzucar = (can: number) => {
        if (azucar <= 4) setAzucar(can += azucar)
    }
    const handleDelAzucar = (can: number) => {
        if (azucar > 0) setAzucar(can += azucar)
    }
    const handleTipeCafe = (tipo: string) => {

        setCafe(tipo)
    }
    const handleBuy = () => {
        const devolver: number = dinero - 0.7
        const mensajito = 'Has comprado un cafe ' + cafe + ' con nivel de Azucar ' + azucar + ' su cambio es ' + devolver.toFixed(2) + ' €'
        const error = 'Saldo insuficiente'
        if (dinero >= 0.7) {
            setComprar(mensajito)
            setDinero(devolver)
        }
        else setComprar(error)
    }
    return (
        <>
            <div className="bg-white text-black rounded-xl">
                <section className="grid grid-cols-2 ">
                    <div className="bg-green-300">

                        <p>Azucar: </p>
                        <div className="text-white grid grid-cols-3">
                            <button className="hover:bg-transparent hover:text-black" onClick={() => handleDelAzucar(-1)}>-</button>
                            <p className="text-black">{azucar}</p>
                            <button className="hover:bg-transparent hover:text-black" onClick={() => handleAddAzucar(1)}>+</button>
                        </div>

                        <div>
                            <p>Café seleccionado: {cafe}</p>
                            <section className="text-white">
                                <button className="hover:bg-transparent hover:text-black" onClick={() => handleTipeCafe('Corto')}>Corto</button>
                                <button className="hover:bg-transparent hover:text-black" onClick={() => handleTipeCafe('Largo')}>Largo</button>
                                <button className="hover:bg-transparent hover:text-black" onClick={() => handleTipeCafe('Descafeinado')}>Descafeinado</button>
                            </section>
                        </div>
                    </div>
                    <div className="bg-blue-500">
                        <div className="m-4 p-4 text-white grid grid-cols-3 m-2">
                            <button className="hover:bg-transparent m-2" onClick={() => handleIngresar(0.1)}>0.1€</button>
                            <button className="hover:bg-transparent m-2" onClick={() => handleIngresar(0.2)}>0.2€</button>
                            <button className="hover:bg-transparent m-2" onClick={() => handleIngresar(0.5)}>0.5€</button>
                            <button className="hover:bg-transparent m-2" onClick={() => handleIngresar(1)}>1.0€</button>
                            <button className="hover:bg-transparent m-2" onClick={() => handleIngresar(2)}>2.0€</button>
                            <button className="hover:bg-transparent m-2" onClick={() => devolver()}>Devolver dinero</button>
                        </div>
                        <h2>Dinero actual {dinero.toFixed(2)}</h2>
                    </div>
                </section>
                <div className="my-5">
                    <button className="text-white" onClick={() => handleBuy()}>Comprar</button>
                </div>
                <footer><p>{comprar}</p></footer>

            </div>
        </>
    )
}

export default Ejercicio13