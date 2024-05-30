import React, { useState } from "react"
import Perfil from "./components/perfil"
import Formulario from "./components/Formulario"
import RepoList from "./components/Repolist"



function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')


  return(
  <div>
    <input type="text" onBlur={(e)=>setNomeUsuario(e.target.value)}/>

    {nomeUsuario.length > 4 &&(
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <RepoList nomeUsuario={nomeUsuario}/>
      </>
    )}
    
    {/* {formularioEstaVisivel &&(
      <Formulario />
    )}
    <button onClick={()=> setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle Form</button> */}
  </div>
  )
}

export default App
