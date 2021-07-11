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

    localStorage.setItem('usuario', usuario);

    axios.get(`https://serratec-ecommerce-grupo2.herokuapp.com/produto`)
      .then(res => {
        const produtos = res.data;
        localStorage.setItem('produtos', JSON.stringify(produtos));
        setSituacaoPesquisa(true);
        setLoading(false);

        console.log()
      })
      .catch(err => {
        setSituacaoPesquisa(false);
        setLoading(false);
      });
  }

  return (
    <Container>      
      {loading  ? '' : <label htmlFor="usuario">Como devemos te chamar?</label>}
      <div>
        <Input id="usuario" placeholder="ex.: Lukinha do Grau" value={usuario}
          className="usernameInput" onChange={e => setUsuario(e.target.value)} />
        
        <Button onClick={handlePesquisa}>Entrar</Button>
      </div>

      {loading ? <img src={loadingImg} alt="loading..." /> : ''}
      {situacaoPesquisa === false ? <p>Algo deu errado :( check o console.</p> : ''}
    </Container>
  )
}
