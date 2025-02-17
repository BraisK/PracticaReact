import { useState } from "react"

interface Props {
  initialCont?: number
}

function Contador({ initialCont=0 }: Props) {
  const [cont, setCont] = useState(initialCont)
  const handleClick = () => {
    //setCont(cont + 2)

    setCont( (prev) => prev+1)
    setCont( (prev) => prev+1)
  }
  return <button className="border-none bg-transparent active:border-none focus:outline-none hover:ring-0" onClick={handleClick}>{cont}</button>
}

export default function Ejem14() {
  return (
    <Contador initialCont={3} />
  )
}
