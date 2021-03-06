import { Card, HeaderImg, Descricao, ButtonJestor } from '../styles/card';

import { Link } from "react-router-dom";

const Produto = (props) => {
    return (
        <Card>
            <HeaderImg imagem={props.children.url} />
            <Descricao>{props.children.nome}</Descricao>

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
