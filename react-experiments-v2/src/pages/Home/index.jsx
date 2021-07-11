import { useState } from 'react';
import axios from 'axios';

import { Container, Input, Button } from './styled';

export default function Home() {
  const [usuario, setUsuario] = useState('');
  const [situacaoPesquisa, setSituacaoPesquisa] = useState(true);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(res => {
        console.log(res);
        setSituacaoPesquisa(true);
      })
      .catch(err => setSituacaoPesquisa(false));
  }

  return (
    <Container>      
      <div>
        <Input type="text" placeholder="ex.: lucascs20182" value={usuario}
          className="usernameInput" onChange={e => setUsuario(e.target.value)} />
        
        <Button onClick={handlePesquisa}>Pesquisar</Button>
      </div>

      {situacaoPesquisa === false ? <p>Usuário não encontrado. Tente novamente.</p> : ''}
    </Container>
  )
}
