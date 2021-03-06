import DetalhesProduto from '../components/DetalhesProduto'

const ProdutoDetalhado = () => {
    const produtos = [
        {
            id: 1,
            imagem: 'https://i.pinimg.com/originals/8d/8c/0f/8d8c0feccecfc9286a3b2d97fe95e15b.jpg',
            descricao: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 2,
            imagem: 'https://i.pinimg.com/originals/8d/8c/0f/8d8c0feccecfc9286a3b2d97fe95e15b.jpg',
            descricao: 'Outra informação test.'
        }
    ]

    return (
        <div id="container-produtos">
            <DetalhesProduto>{produtos[0]}</DetalhesProduto>
            {/* <DetalhesProduto>{produtos[1]}</DetalhesProduto> */}
        </div>
    )
}

export default ProdutoDetalhado;
