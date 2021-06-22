import styled from 'styled-components';

export const Titulo = styled.h1`
    color: ${props => props.cor};
    background-color: #ddd;
    font-size: ${props => `${props.fontSize}px`};

    span {
        color: blue;
        font-size: 14px;
    }
`;

export const SubTitulo = styled(Titulo)`
    background-color: #000;
    color: #fff;
`;

export const Button = styled.button`
    font-size: 16px;
    margin: 10px;
    padding: 5px 10px;
    border: 2px solid crimson;
    border-radius: 3px;
    color: ${props => props.primary ? "#fff" : "crimson"};
    background-color: ${props => props.primary ? "crimson" : "#fff"};
    cursor: pointer;

    /* & referencia o próprio elemento */
    /* & opcional, nesse caso */
    &:hover {
        color: ${props => props.primary ? "#fff" : "#ff2e58"};
        background-color: ${props => props.primary ? "#ff2e58" : "#fff"};
    }
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
    color: ${props => props.secundary ? "#1543b7" : "#fff"};

    :hover {
        background: ${props => props.secundary ? "#e7f3ff" : "rgba(16, 52, 145, 1)"};
    }
`;

export const DivPai = styled.div`
    width: 100%;
    min-height: 30px;
    background-color: black;

    div {
        width: 50%;
        min-height: 30px;
        background-color: orange;
    }
`;
