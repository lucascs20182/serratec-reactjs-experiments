import styled from 'styled-components';

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
