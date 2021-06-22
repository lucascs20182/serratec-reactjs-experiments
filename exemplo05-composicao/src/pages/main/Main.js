import React, { useState } from "react";
import { Button } from "../../styles/buttons-styles";
import Par from "../../components/Par";
import Impar from "../../components/Impar";

const Main = () => {

    const [resultado, setResultado] = useState(true);

    const calcularParOuImpar = (e) => {
        e.preventDefault();

        let numero = parseInt(e.target[0].value);
        // let valor = document.querySelector("#numero").value;

        (numero % 2 !== 0) ? setResultado(false) : setResultado(true);

    }


    return (
        <div>
            <form onSubmit={calcularParOuImpar}>
                <label htmlFor="numero">Digite um número</label>
                <input id="numero" type="text" />

                <Button> Calcular</Button>
            </form>
            <br />
            <br />

            {
                (resultado) ? 
                    <Par></Par> :
                    <Impar></Impar>
            }           
            
        </div>
  
    
    );
}

export default Main;