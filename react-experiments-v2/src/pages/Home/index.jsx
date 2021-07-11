import { useState } from 'react';
import axios from 'axios';

import { Container, Input, Button } from './styled';

import loadingImg from '../../assets/loading.gif';

export default function Home() {
  const [usuario, setUsuario] = useState('');
  const [situacaoPesquisa, setSituacaoPesquisa] = useState(true);
  const [loading, setLoading] = useState(false);

  function handlePesquisa() {
    setLoading(true);

    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(res => {
        console.log(res);
        setSituacaoPesquisa(true);

        setLoading(false);
      })
      .catch(err => {
        setSituacaoPesquisa(false);

        setLoading(false);
      });
  }

  return (
    <Container>      
      <div>
        <Input type="text" placeholder="ex.: lucascs20182" value={usuario}
          className="usernameInput" onChange={e => setUsuario(e.target.value)} />
        
        <Button onClick={handlePesquisa}>Pesquisar</Button>
      </div>

      {loading ? <img src={loadingImg} alt="loading..." /> : ''}

      {situacaoPesquisa === false ? <p>Usuário não encontrado. Tente novamente.</p> : ''}
    </Container>
  )
}
