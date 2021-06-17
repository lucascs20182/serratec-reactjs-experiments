import React from 'react';
import { Link } from "react-router-dom";

import Produto from '../models/Produto';
import api from '../service/api.js';

import "./Main.css";

export default class Main extends React.Component {

  state = {
    produtos: [],
    pessoa: {
      cliente: {}
    }
  };

  obterProdutos = async () => {
    const resposta = await api.get("/api/produtos");

    this.setState({ produtos: resposta.data.map(obj => new Produto(obj)) });
  }

  // executa toda vez que a page é carregada
  componentDidMount() {
    this.obterProdutos();

    // api.get('/api/produtos')
    //   .then(resposta => {
    //     // console.log(resposta);
    //     const produtos = resposta.data.map(produto => new Produto(produto))
    //   })
    //   .catch(erro => console.log(erro))

    // api.post('/create', {
    //   "username": "lucas10",
    //   "senha": "lucas10"
    // })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }

  render() {

    const { produtos } = this.state;

    return (

      <div className="container-produtos">
        {produtos.map(produto => (
          <div className="produtos" key={produto.id}>
            <p><strong>Id:</strong> {produto.id} </p>
            <p><strong>Nome:</strong> {produto.nome} </p>
            <p><strong>Valor</strong> {produto.valor} </p>

            <Link to={`/detalhes/${produto.id}`} className="btn-detalhes">Detalhes</Link>
          </div>
        ))}
      </div>
    );
  }
}
