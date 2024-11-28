// Las porop son inmutables
function Saludador({msg}:{msg:string}){
  return <div>{msg}</div>
}

export default function Ejem8() {
  return <Saludador msg="Hola"/>
}
