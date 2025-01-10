// Para manejo del contexto
// Hay librerias muy potentes como Zustand o Redexu

import { useContext, useState } from "react"
import { BackgroundContext } from "../contexts/BackgroundContext"

// En este ejemplo vamos a usar algo mas sencillo com: useContext
function A() {
    const {background, setBackground} = useContext(BackgroundContext)
    return (
        <>
            <div>A {background}</div>
            <button onClick={ () => setBackground('light')}>Light</button>
        </>
    )
}
function B() {
    const {background, setBackground} = useContext(BackgroundContext)
    return (
        <>
            <div>B {background}</div>
            <button onClick={ () => setBackground('dark')}>Dark</button>
        </>
    )
}

function Ejem27() {
    const [background, setBackground] = useState('light')
    return (
        <BackgroundContext.Provider value={{background,setBackground}}>
            <A />
            <B />
        </BackgroundContext.Provider>
    )
}
export default Ejem27