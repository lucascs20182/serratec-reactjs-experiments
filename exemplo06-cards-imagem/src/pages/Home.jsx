import Produto from '../components/Produto';

const Home = () => {
    const produtos = [
        {
            id: 1,
            imagem: 'https://i.pinimg.com/originals/8d/8c/0f/8d8c0feccecfc9286a3b2d97fe95e15b.jpg',
            descricao: 'Lorem ipsum dolor sit amet.'
        }
    ]

    return (
        <div id="container-produtos">
            <Produto>{produtos[0]}</Produto>
            {/* <Produto />
            <Produto />
            <Produto /> */}
        </div>
    )
}

export default Home;
