import styled from 'styled-components';

export const HeaderImg = styled.img.attrs({
    src: 'https://i.pinimg.com/originals/8d/8c/0f/8d8c0feccecfc9286a3b2d97fe95e15b.jpg'
})`
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
