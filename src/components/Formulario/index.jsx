import { useState, useEffect } from "react"

const Formulario = (props) =>{
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)

    useEffect(()=>{
        console.log(`o estado da materia mudou para ${materiaA}`)
    },[materiaA,materiaB])

    useEffect(()=>{
        console.log('o coponente iniciou')

        return () =>{
            console.log('o componente finalizou')
        }
    },[props])

    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        

        if (media >=7){
            return(
                <p>Voce foi aprovado!</p>
            )
        }else{
            return(
                <p>Voce Nao foi Aprovado!</p>
            )
        }

    }


    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="number" placeholder="Nota Materia A" onChange={({ target }) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota Materia C" onChange={({ target })=> setMateriaB(parseInt(target.value))} />
            <input type="number" placeholder="Nota Materia B" onChange={({ target })=> setMateriaC(parseInt(target.value))} />
            
            {renderizaResultado()}
        </form>
    )
}

export default Formulario