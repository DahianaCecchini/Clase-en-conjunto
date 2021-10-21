import react, { useState } from 'react'
import calcularTriangulos from '../js/Triangulos'


const Triangulos = () => {
    const [ladoA, setLadoA] = useState (1)
    const [ladoB, setLadoB] = useState (1)
    const [ladoC, setLadoC] = useState (1)

    return(
    <article>
        <div>
            <input id="A" type="text" placeholder="lado A" onChange={e => setLadoA (e.target.value)} value={ladoA}/>
            <input id="B" type="text" placeholder="lado B" onChange={e => setLadoB (e.target.value)}value={ladoB}/>
            <input id="C" type="text" placeholder="lado C" onChange={e => setLadoC (e.target.value)}value={ladoC}/>
            <button onClick={() => calcularTriangulos(ladoA,ladoB,ladoC)}>CALCULAR</button>
        </div>
        <div>
            <input id="LA" type="text" placeholder="lado A" />
            <input id="LB" type="text" placeholder="lado B" />
            <input id="Angulo" type="text" placeholder="Angulo"/>
            <button>CALCULAR</button>
        </div>
    </article>
    )
}
export default Triangulos