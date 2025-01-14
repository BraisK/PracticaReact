/*

Filtrado de coches
Se desea mostrar por pantalla un listado de coches. (marca, modelo y tipo carrocería: verlina, suv, cupe, deportivo, ... )
Mediante un formulario podremos filtrar:
por marca (caja de texto)
y por tipo de carrocería (select) Se usará query params para mejorar la experiencia del usuario ej: http://localhost?marca=seat&carroceria=suv */

import { FormEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface Car {
    brand: string
    model: string
    type: string
}

const initialCars = [
    { brand: 'Seat', model: 'Leon', type: 'sedan' },
    { brand: 'Ford', model: 'Focus', type: 'sedan' },
    { brand: 'BMW', model: 'Serie 3', type: 'berlina' },
    { brand: 'BMW', model: 'Serie 6', type: 'berlina' },
    { brand: 'Audi', model: 'TT', type: 'coupe' },
    { brand: 'BMW', model: 'Serie 5', type: 'coupe' },
]

function Ejercicio14() {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    //http://localhost:5173/Ejercicio%2014?brand?=BMW&type?=berlina
    const brandParam = queryParams.get('brand') || ''
    const typeParam = queryParams.get('type') || ''

    const [cars, setCars] = useState<Car[]>(initialCars)
    const [brand, setBrand] = useState(brandParam)
    const [type, setType] = useState(typeParam)


    useEffect(() => {
        const filtredCars = initialCars.filter(
            car =>
                (brandParam ? car.brand.toLowerCase().includes(brandParam?.toLocaleLowerCase()) : true) &&
                (typeParam ? car.type === typeParam : true)

        )
        setCars(filtredCars)
    }, [brandParam, typeParam])

    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        navigate(`?brand=${brand}&type=${type}`)
    }

    return (
        <main>

            <h1>Listado de coches</h1>

            <form onSubmit={handleSubmit}>
                <label className="m-4" htmlFor="" id="brand">Marca</label>
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />

                <label >Carrocería</label>
                <select value={type} onChange={(e)=> setType(e.target.value)} id="type">
                    <option value="">Todas</option>
                    <option value="sedan">Sedan</option>
                    <option value="berlina">Berlina</option>
                    <option value="coupe">Coupe</option>
                    <option value="deportivo">Deportivo</option>
                    <option value="suv">Suv</option>
                </select>
                <button>Filtrar</button>
            </form>
            {cars.length ===0 &&<div>No hay resultados que concidan</div> }
            <ul>
                {cars.map((car, index) => <li key={index}>{car.brand} {car.model} {car.type}</li>)}
            </ul>
        </main>
    )
}

export default Ejercicio14


/* import { useLocation } from "react-router-dom"

let listado = [
    { marca: "toyota", modelo: "2002", tipoCarroceria: "verlina" },
    { marca: "cadilac", modelo: "alpha", tipoCarroceria: "suv" },
    { marca: "nisan", modelo: "kaskai", tipoCarroceria: "deportivo" }
]

function Ejercicio14() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const marca = queryParams.get('marca')
    const carroceria = queryParams.get('tipoCarroceria')

    if(marca) listado= listado.filter( coche => coche.marca.toLowerCase().startsWith(marca?.toLocaleLowerCase()))
    if(carroceria) listado= listado.filter( coche => coche.tipoCarroceria.toLowerCase().startsWith(carroceria?.toLocaleLowerCase()))
    return (
        <>
            <div>
                <h1>Listado de coches</h1>
                <div>
                    {listado.map((coche, index) => <div key={index}>{coche.marca}</div>)}
                </div>
                <h1>Filtrado</h1>
                <form className="flex flex-row items-center justify-center" action="">
                    <label htmlFor="">Marca
                        <input id="marca" type="text" />
                    </label>

                    <select name="" id="modelo">
                        <option value="verlina">verlina</option>
                        <option value="suv">suv</option>
                        <option value="cupe">cupe</option>
                        <option value="deportivo">deportivo</option>
                    </select>
                    <button className="m-4">Filtrar</button>
                </form>
            </div>
        </>
    )
}

export default Ejercicio14 */