import { useState } from 'react';

// exemplo de controlled component
export default function App(props) {
  const [user, setUser] = useState('');

  return (
    <>
      <p>{user}</p>

      <label htmlFor="username">Username:</label>
      <input type="text" placeholder="ex.: lucascs20182" value={user}
        className="usernameInput" onChange={e => setUser(e.target.value)} />
      
      <button>Pesquisar</button>
    </>
  )
}
