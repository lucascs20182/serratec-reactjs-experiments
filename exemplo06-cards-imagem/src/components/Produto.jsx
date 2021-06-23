import { Card, HeaderImg, Descricao, CardContainer, ButtonJestor } from '../styles/card';

import { Link } from "react-router-dom";

const Produto = (props) => {
    return (
        <Card>
            <HeaderImg imagem={props.children.imagem} />
            <Descricao>{props.children.descricao}</Descricao>

            {
                props.secundary ? 
                    <ButtonJestor secundary>
                        <Link to={`/produto/${props.children.id}`}>Detalhes</Link>
                    </ButtonJestor>
                :
                    <ButtonJestor>
                        <Link to={`/produto/${props.children.id}`}>Detalhes</Link>
                    </ButtonJestor>
            }
        </Card>
    )
}

export default Produto;
