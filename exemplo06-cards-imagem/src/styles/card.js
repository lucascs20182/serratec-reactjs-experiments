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

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
