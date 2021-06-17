import React from "react";

import "./Main.css";

export default class Main extends React.Component {

  state = {
    produtos: [
      {
        id: 1,
        nome: "Sonho de creme",
        valor: 2.5
      }
    ],
    mensagem: "Olá, tudo bem com vcs?"
  };

  render() {
    return (

      <div className="container-produtos">
        {this.state.produtos.map(produto => (
          <div className="produtos" key={produto.id}>
            <p><strong>Id:</strong> {produto.id} </p>
            <p><strong>Nome:</strong> {produto.nome} </p>
            <p><strong>Valor</strong> {produto.valor} </p>
          </div>
        ))}
      </div>
    );
  }
}
