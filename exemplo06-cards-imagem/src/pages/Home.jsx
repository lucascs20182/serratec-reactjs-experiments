import Produto from '../components/Produto';

import { CardContainer } from '../styles/card';

const Home = () => {
    const produtos = [
        {
            id: 1,
            imagem: 'https://i.pinimg.com/originals/8d/8c/0f/8d8c0feccecfc9286a3b2d97fe95e15b.jpg',
            descricao: 'Lorem ipsum dolor sit amet.'
        }
    ]

    return (
        <CardContainer>
            <Produto>{produtos[0]}</Produto>
            <Produto secundary>{produtos[0]}</Produto>
            <Produto>{produtos[0]}</Produto>
            <Produto secundary>{produtos[0]}</Produto>
            <Produto secundary>{produtos[0]}</Produto>
            <Produto>{produtos[0]}</Produto>
            <Produto secundary>{produtos[0]}</Produto>
            <Produto>{produtos[0]}</Produto>
        </CardContainer>
    )
}

export default Home;
