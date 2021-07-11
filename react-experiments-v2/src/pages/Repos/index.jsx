import { Container, Title, List } from './styled';

export default function Repos(props) {
    return (
        <Container>
            <Title>{`Repositórios de ${props.user}`}</Title>
            <List>
                <li>Repo 1</li>
                <li>Repo 2</li>
                <li>Repo 3</li>
                <li>Repo 4</li>
                <li>Repo 5</li>
                <li>Repo 6</li>
                <li>Repo 7</li>
            </List>
        </Container>
    )
}
