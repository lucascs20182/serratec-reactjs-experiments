import { useState } from 'react';

export default function App(props) {
  const [usuario, setUsuario] = useState('Guilherme');

  return (
    <>
      <h1>{`${props.boasVindas}, ${usuario || props.user}!`}</h1>

      <label htmlFor="username">Username:</label>
      <input type="text" id="username" className="usernameInput"
        placeholder="ex.: lucascs20182" />
      
      <button>Pesquisar</button>
    </>
  )
}
