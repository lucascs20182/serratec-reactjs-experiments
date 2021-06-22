import React from "react";
// import {Card} from "../../styles/geral-styles";
import MeuCard from "../../components/MeuCard";
import MeuCard2 from "../../components/MeuCard2";
import {Button} from "../../styles/buttons-styles";

const  Composicao = () => {
    let numeros = [1,5,8,9,11];

  
    // return (
    //    <div>
    //        {numeros.map(numero => (
    //           <MeuCard titulo="Numeros">
    //             <div>
    //                 <h1>{numero}</h1>
    //             </div> 
    //           </MeuCard>
    //        ))}
    //    </div>
       
    // );

    return (
        <div>            
            <MeuCard >
                {/* Aquim posso enfiar qualquer coisa */}
            </MeuCard>

            <MeuCard >
                <div>
                    <ul>
                        <li>Banana</li>
                        <li>Uva</li>
                    </ul>
                </div> 
            </MeuCard>

            <MeuCard >
                <Button>Teste</Button>
            </MeuCard>

            <MeuCard2 
                header={
                    <div>
                        <h1> Sou o header</h1>
                        <Button>Botão header</Button>
                    </div>
                }

                main={
                    <h1> Sou o main</h1>
                }

                footer={
                    <h1> Sou o footer</h1>
                }
            >
                
                <h1>Sou um filho!!!!</h1>
            </MeuCard2>
           
        </div>
        
     );
}

export default Composicao;