import styled from 'styled-components';

export const HeaderImg = styled.img.attrs(props => ({
    src: props.imagem
}))`
width: 200px;
border: 1px solid black;
`

export const Descricao = styled.div`
    font-size: 16px;
`

export const Card = styled.div`
    width:280px;
    height:300px;
    padding:20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    margin-bottom:5px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ButtonJestor = styled.button`
    font-family: Rubik, system-ui, -apple-system, sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    background: #2562ff;
    padding: 8px 16px;
    margin: 0 5px;
    border-radius: 12px;
    border: none;
    width: 125px;
    cursor: pointer;

    background: ${props => props.secundary ? "#e7f3ff" : "#2562ff"};

    :hover {
        background: ${props => props.secundary ? "#e7f3ff" : "rgba(16, 52, 145, 1)"};
    }

    a {
        text-decoration: none;
        color: ${props => props.secundary ? "#1543b7" : "#fff"};

        // quebrou com a refatoração :(
            
        /* faz o link ocupar todo espaço do botão
        sem isso o link só funciona ao clicar nas letras dentro do botão */
        display: block;
        width: 100%;
        height: 100%;
        z-index: 10
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
