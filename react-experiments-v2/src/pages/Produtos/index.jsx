import { Container, Title, List } from './styled';
import { useEffect, useState } from 'react';

export default function Produtos() {
    const [usuario, setUsuario] = useState('');
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        setUsuario(localStorage.getItem('usuario'));
        const produtos = localStorage.getItem('produtos');
        setProdutos(JSON.parse(produtos));
    }, [])

    return (
        <Container>
            <Title>{`Produtos de ${usuario}`}</Title>
            <List>
                {produtos.map(produto => {
                    console.log(produto);

                    return (
                        <li key={produto.id}>
                            <img src={produto.url} alt="imagem do produto" height="100px" />
                            <p>{`${produto.nome} - ${produto.autor}`}</p>
                        </li>
                    )
                })}
            </List>
        </Container>
    )
}
