import { useState } from 'react';
import axios from 'axios';

export default function App() {
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
    <>
      {situacaoPesquisa === false ? <p>Usuário não encontrado. Tente novamente.</p> : ''}
      
      <label htmlFor="username">Username:</label>
      <input type="text" placeholder="ex.: lucascs20182" value={usuario}
        className="usernameInput" onChange={e => setUsuario(e.target.value)} />
      
      <button onClick={handlePesquisa}>Pesquisar</button>
    </>
  )
}
