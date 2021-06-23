import { Card, HeaderImg, Descricao, CardContainer } from '../styles/card';

const Produto = (props) => {
    return (
        <CardContainer>
            <Card>
                <HeaderImg imagem={props.children.imagem} />
                <Descricao>{props.children.descricao}</Descricao>
            </Card>

            <Card>
                <HeaderImg imagem={props.children.imagem} />
                <Descricao>{props.children.descricao}</Descricao>
            </Card>

            <Card>
                <HeaderImg imagem={props.children.imagem} />
                <Descricao>{props.children.descricao}</Descricao>
            </Card>

            <Card>
                <HeaderImg imagem={props.children.imagem} />
                <Descricao>{props.children.descricao}</Descricao>
            </Card>       

            <Card>
                <HeaderImg imagem={props.children.imagem} />
                <Descricao>{props.children.descricao}</Descricao>
            </Card>

            <Card>
                <HeaderImg imagem={props.children.imagem} />
                <Descricao>{props.children.descricao}</Descricao>
            </Card>

            <Card>
                <HeaderImg imagem={props.children.imagem} />
                <Descricao>{props.children.descricao}</Descricao>
            </Card>

            <Card>
                <HeaderImg imagem={props.children.imagem} />
                <Descricao>{props.children.descricao}</Descricao>
            </Card>     
        </CardContainer>
    )
}

export default Produto;
