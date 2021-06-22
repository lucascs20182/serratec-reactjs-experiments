import styled from 'styled-components';

export const Titulo = styled.h1`
    color: ${props => props.cor};
    background-color: #ddd;
    font-size: ${props => `${props.fontSize}px`};

    span {
        color: blue;
        font-size:14px;
    }
`;

export const SubTitulo = styled(Titulo)`
    background-color: #000;
    color: ${props => props.cor};
`;


export const Button = styled.button`
    font-size: 16px;
    margin: 10px;
    padding: 5px 10px;
    border: 2px solid crimson;
    border-radius: 3px;
    color: ${props => props.primary ? "#fff" : "crimson"};
    background-color: ${props => props.primary ? "crimson" : "#fff" };
    cursor: pointer;

    :hover {
        color: ${props => props.primary ? "#fff" : "crimson"};
        background-color:  ${props => props.primary ? "#FF2E58" : "#E8AAEB"}; 
    }
`;

export const DivPai = styled.div`
    width: 100%;
    min-height:30px;
    background-color: #000;
    
    div {
        width: 100%;
        min-height:20px;
        background-color: orange;

        div {
            width: 100%;
            min-height:10px;
            background-color: purple;
        };
    }

`;