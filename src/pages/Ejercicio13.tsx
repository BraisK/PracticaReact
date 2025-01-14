/* Maquina de café Haz una replica de la maquina de café de Cebem.

Tendremos botones para añadir dinero: 0.10, 0.20, 0.50, 1.00 y 2.00 €
Un boton para devolver todo el dinero insertado
Tendremos botones para aumentar o disminuir el nivel de azucar (de 0 a 5)
Tendremos botones para indicar el tipo de cafe: corto, largo, descafeinado,...
El precio de los cafés es de 0.70 €
Mostrar error si no se ha insertado el suficiente dinero.
Si todo va bien, se mostrará por pantalla el tipo de café consumido, su nivel de azucar y el cambio a devolver */

import { useState } from "react"

interface Coffe {
    name: string
    price: number
}

const coffes = [
    { name: 'cortado', price: 0.70 },
    { name: 'descafeinado', price: 0.70 },
    { name: 'solo', price: 0.70 },
    { name: 'con leche', price: 0.70 },
    { name: 'te', price: 0.70 },
]

const coins = [0.10, 0.20, 0.50, 1.00, 2.00]

function Ejercicio13() {
    const [dinero, setDinero] = useState(0)
    const [azucar, setAzucar] = useState(1)
    const [msg, setMsg] = useState('')
    /* const handleIngresar = (cant: number) => {
        setDinero(cant + dinero)
    } */
    /* const handleAddAzucar = (can: number) => {
        if (azucar <= 4) setAzucar(can += azucar)
    }
    const handleDelAzucar = (can: number) => {
        if (azucar > 0) setAzucar(can += azucar)
    } */
    const handleChangeSugar = (increment: number) => {
        if (azucar + increment < 0 || azucar + increment > 5) return azucar
        setAzucar(azucar + increment)
    }
    const handleGetCoffe = (coffe: Coffe) => {
        let endMsg
        if (dinero >= coffe.price) {
            endMsg = `Te he servido un café ${coffe.name} con ${azucar} y el cambio es: ${dinero - coffe.price}`
            setDinero(dinero - coffe.price)
        } else {
            endMsg = 'Saldo insuficiente'
        }
        setMsg(endMsg)
    }
    /* const handleBuy = () => {
        const devolver: number = dinero - 0.7
        const mensajito = 'Has comprado un cafe ' + cafe + ' con nivel de Azucar ' + azucar + ' su cambio es ' + devolver.toFixed(2) + ' €'
        const error = 'Saldo insuficiente'
        if (dinero >= 0.7) {
            setComprar(mensajito)
            setDinero(devolver)
        }
        else setComprar(error)
    } */
    return (
        <>
            <main className="rounded-xl">
                <h1>MÁQUINA DE CAFÉ</h1>
                <section className="grid grid-cols-2 bg-red-300">
                    <section>

                        <header>
                            Azucar
                            <button className="hover:bg-transparent hover:text-black m-4" onClick={() => handleChangeSugar(-1)}>-</button>
                            {azucar}
                            <button className="hover:bg-transparent hover:text-black m-4" onClick={() => handleChangeSugar(1)}>+</button>
                        </header>

                        <div className="flex flex-col">
                            {coffes.map(coffe => <button key={coffe.name} className="hover:bg-transparent hover:text-black" onClick={() => handleGetCoffe(coffe)}>{coffe.name} {coffe.price}</button>)}
                        </div>
                    </section>
                    <section className="">
                        <div className="m-4 p-4 text-white m-2">
                            {coins.map( (coin) => <button key={coin} onClick={() => setDinero(coin + dinero)}>{coin}</button>)}
                            <button className="hover:bg-transparent m-2 bg-red-600" onClick={() => setDinero(0)}>Devolver dinero</button>
                        </div>
                        <h2 className="font-bold text-black">Dinero actual {dinero.toFixed(2)}</h2>
                    </section>
                </section>

                <footer><p>{msg}</p></footer>

            </main>
        </>
    )
}

export default Ejercicio13