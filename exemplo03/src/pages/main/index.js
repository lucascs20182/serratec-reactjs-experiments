import React, { useState } from 'react';

import './index.css';

const Main = () => {
    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(contador + 1);
    }

    const decrementarContador = () => {
        setContador(contador - 1);
    }

    return (
        <main>
            <MostrarMensagem msg="Experimentos com state"></MostrarMensagem>

            <MostrarContador valorContador={contador}></MostrarContador>

            <div id="container-btn">
                <button onClick={incrementarContador}>Aumentar</button>
                <button onClick={decrementarContador}>Diminuir</button>
            </div>
        </main>
    )
}

const MostrarMensagem = props => (
    <h1>{props.msg}</h1>
)

const MostrarContador = props => (
    <p>{`O contador está em ${props.valorContador}`}</p>
)

export default Main;
