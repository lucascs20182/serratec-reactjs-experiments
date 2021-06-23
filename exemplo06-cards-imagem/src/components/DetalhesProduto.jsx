const DetalhesProduto = (props) => {
    return (
        <div>
            <p>{props.children.id}</p>
            <p>{props.children.descricao}</p>
        </div>
    )
}

export default DetalhesProduto;
