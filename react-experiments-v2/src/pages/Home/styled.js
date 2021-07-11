import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 50vh;
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 3.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    font-size: 1.3rem;
    /* margin-bottom: 30px; */

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button`
    height: 3.5rem;
    width: 90px;
    border: 1px solid #000;
    background: #000;
    font-size: 1.3rem;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`
