import React from "react";

import { Titulo, SubTitulo, Button, DivPai, ButtonJestor } from "./styles";

function App() {
  return (
    <center className="App">
      <ButtonJestor>Try for free</ButtonJestor>
      <ButtonJestor secundary>Know more</ButtonJestor>

      <Button primary>Botão</Button>
      <Button>Botão</Button> {/* secundário */}      

      <DivPai><div></div></DivPai>

      <Titulo fontSize={130} cor="#323232">olá, <span>tudo bem?</span></Titulo>
      <Titulo fontSize={60} cor="#c3c3c3">olá, <span>tudo bem?</span></Titulo>

      <SubTitulo>subtítulo</SubTitulo>
    </center>
  );
}

export default App;
