import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    max-width: 991px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;    
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;

    li {
        margin: .5rem 0;
        background: #000;
        color: #fff;
        padding: .5rem;
    }
`
