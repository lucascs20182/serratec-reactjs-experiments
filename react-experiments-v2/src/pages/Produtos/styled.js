import styled from 'styled-components';

export const Container = styled.div`
    max-width: 991px;
    margin: 25px auto;
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
        display: flex;
        align-items: center;
        justify-content: flex-start;

        p {
            margin-left: 15px;
        }
    }
`
