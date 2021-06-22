import React  from "react";
import Par from "../../components/Par";
import Impar from "../../components/Impar";

const Contato = (props) => {

    // if(props.par){
    //     return <Par></Par>
    // }
    // return <Impar></Impar>

    switch (props.opcao) {
        case 1: return <h1>Escolheu a opção 1</h1>            
        case 2: return <h1>Escolheu a opção 2</h1>   
        case 3: return <h1>Escolheu a opção 3</h1>   
        default: return <h1>Opção invalida</h1>   
    }
}

export default Contato;